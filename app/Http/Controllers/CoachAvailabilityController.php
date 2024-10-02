<?php

namespace App\Http\Controllers;

use App\Models\CoachAvailability;
use App\Models\Registration;
use Carbon\Carbon;
use Inertia\Inertia;

class CoachAvailabilityController extends Controller
{
    public function showCoachAvailability()
    {
        $unavailableDates = Registration::where('status', 'accepted')
            ->with('coach')
            ->where('date', '>=', Carbon::now()->format('Y-m-d'))
            ->orderBy('date', 'desc')
            ->get(['coach_id', 'date', 'time', 'class']);

        return Inertia::render('Guest/Coach_Availability', [
            'unavailableDates' => $unavailableDates,
        ]);
    }
}
