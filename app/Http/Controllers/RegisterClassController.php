<?php

namespace App\Http\Controllers;

use App\Models\Coach;
use App\Models\CoachAvailability;
use App\Models\Registration;
use App\Notifications\RegistrationStatusNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;

class RegisterClassController extends Controller
{
    public function submit(Request $request)
    {
        $request->validate([
            'selectedDate' => 'required|date',
            'selectedClass' => 'required|string',
            'selectedTime' => 'required|string',
            'selectedArea' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $coach = Coach::where('area', $request->selectedArea)->first();

        if (!$coach) {
            return redirect()->back()->withErrors(['selectedArea' => 'No coach available in the selected area.']);
        }

        // Check if the coach is already booked for any class at the selected date and time
        $existingRegistration = Registration::where('coach_id', $coach->id)
            ->where('date', $request->selectedDate)
            ->where('time', $request->selectedTime)
            ->first();

        // If any class is booked, and either it's a private class
        if ($existingRegistration && ($existingRegistration->class === 'Private Class')) {
            return redirect()->back()->withErrors(['selectedTime' => 'The coach is already booked for the selected time. Please choose a different time.']);
        }

        $formattedDate = Carbon::parse($request->selectedDate)->format('Y-m-d');

        // Create the registration since the slot is available
        Registration::create([
            'date' => $formattedDate,
            'class' => $request->selectedClass,
            'time' => $request->selectedTime,
            'area' => $request->selectedArea,
            'coach_id' => $coach->id,
            'user_id' => auth()->id(),
            'price' => $request->price,
        ]);

        return redirect()->route('home')->with('success', 'You have successfully registered for the class.');
    }


    public function edit(Registration $registration)
    {
        if (in_array($registration->status, ['accepted', 'rejected'])) {
            return redirect()->route('user_dashboard')->with('error', 'You cannot edit this class as it has already been processed.');
        }

        return inertia('Guest/Edit_Class', [
            'registration' => $registration,
            'availableClasses' => ['Baby Class', 'Kid Class', 'Adult Class', 'Private Class'],
            'availableTimes' => ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'],
            'availableAreas' => ['Cheras', 'Bukit Jalil', 'Sunway'],
            'classPrices' => [
                'Baby Class' => 20,
                'Kid Class' => 25,
                'Adult Class' => 30,
                'Private Class' => 50,
            ],
        ]);
    }

    public function update(Request $request, Registration $registration)
    {
        $request->validate([
            'date' => 'required|date',
            'class' => 'required|string',
            'time' => 'required|string',
            'area' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $registration->update($request->only(['date', 'class', 'time', 'area', 'price']));

        return redirect()->route('user_dashboard')->with('success', 'Class updated successfully.');
    }

    public function destroy($id)
    {
        $registration = Registration::find($id);

        if ($registration && $registration->status === 'pending') {
            $registration->delete();
            return redirect()->route('user_dashboard')->with('success', 'Class deleted successfully.');
        }

        return redirect()->route('user_dashboard')->with('error', 'You cannot delete this class.');
    }

    public function accept($id)
    {
        $registration = Registration::findOrFail($id);
        $registration->update(['status' => 'accepted']);

        $startTime = Carbon::createFromFormat('h:i A', $registration->time)->format('H:i:s');

        CoachAvailability::create([
            'coach_id' => $registration->coach_id,
            'date' => $registration->date,
            'start_time' => $startTime,
        ]);

        return redirect()->route('coach_dashboard')->with('success', 'Registration accepted.');
    }

    public function reject($id)
    {
        $registration = Registration::findOrFail($id);
        $registration->update(['status' => 'rejected']);

        $registration->user->notify(new RegistrationStatusNotification('rejected', $registration->class, $registration->date, $registration->time));

        return redirect()->route('coach_dashboard')->with('success', 'Registration rejected.');
    }
}
