<?php

namespace App\Http\Controllers;

use App\Models\Coach;
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

    public function accept($id)
    {
        $registration = Registration::findOrFail($id);
        $registration->update(['status' => 'accepted']);

//        $registration->user->notify(new RegistrationStatusNotification('accepted', $registration->class, $registration->date, $registration->time));

        return redirect()->route('coach_dashboard')->with('success', 'Registration accepted.');
    }

    public function reject($id)
    {
        $registration = Registration::findOrFail($id);
        $registration->update(['status' => 'rejected']);

//        $registration->user->notify(new RegistrationStatusNotification('rejected', $registration->class, $registration->date, $registration->time));

        return redirect()->route('coach_dashboard')->with('success', 'Registration rejected.');
    }
}
