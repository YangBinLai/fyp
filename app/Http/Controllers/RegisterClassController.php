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
        ]);

        $coach = Coach::where('area', $request->selectedArea)->first();

        if (!$coach) {
            return redirect()->back()->withErrors(['selectedArea' => 'No coach available in the selected area.']);
        }

        $formattedDate = Carbon::parse($request->selectedDate)->format('Y-m-d');

        Registration::create([
            'date' => $formattedDate,
            'class' => $request->selectedClass,
            'time' => $request->selectedTime,
            'area' => $request->selectedArea,
            'coach_id' => $coach->id,
            'user_id' => auth()->id(),
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
        ]);
    }

    public function update(Request $request, Registration $registration)
    {
        $request->validate([
            'date' => 'required|date',
            'class' => 'required|string',
            'time' => 'required|string',
            'area' => 'required|string',
        ]);

        $registration->update($request->only(['date', 'class', 'time', 'area']));

        return redirect()->route('user_dashboard')->with('success', 'Class updated successfully.');
    }
    
    public function accept($id)
    {
        $registration = Registration::findOrFail($id);
        $registration->update(['status' => 'accepted']);

        CoachAvailability::create([
            'coach_id' => $registration->coach_id,
            'date' => $registration->date,
            'start_time' => $registration->time,
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
