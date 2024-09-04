<?php

use App\Models\Registration;
use Carbon\Carbon;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

// to run reject all the pending classes
Artisan::command('reject', function () {
    $registrations = Registration::where('status', 'pending')
        ->where('date', '<', Carbon::today())
        ->get();

    foreach ($registrations as $registration) {
        $registration->update(['status' => 'rejected']);
    }
})->purpose('Reject')->daily();
// php artisan schedule:run
