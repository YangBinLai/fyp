<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Registration;

class UserDashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $registrations = Registration::where('user_id', $user->id)->with('coach')->get();

        return Inertia::render('Guest/User_dashboard', [
            'registrations' => $registrations,
        ]);
    }
}
