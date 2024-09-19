<?php

namespace App\Http\Controllers;

use App\Models\CoachAvailability;
use App\Models\Registration;

class CoachAvailabilityController extends Controller
{
    public function showUnavailable()
    {
        // Fetch all accepted registrations (i.e., unavailable times for coaches)
        $unavailableDates = Registration::where('status', 'accepted')
            ->with('coach')
            ->get(['coach_id', 'date', 'time', 'class']);

        return inertia('Guest/Coach_Availability', [
            'unavailableDates' => $unavailableDates,
        ]);
    }
}
