<?php

namespace App\Http\Controllers;

use App\Models\Coach;
use App\Models\Registration;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class CoachController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::getUser();
        if($user->role!='coach'){
            return response()->json(['message' => 'unauthorized']);
        }
        $registration = Registration::with('user')->get();

        return Inertia::render('Coach/Coach_Dashboard', [
            'registrations' => $registration
        ]);
    }
    public function store(Request $request)
    {
        $user = Auth::getUser();
        if($user->role!='admin'){
            return response()->json(['message' => 'unauthorized']);
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:coaches,email',
            'phone' => 'nullable|string|max:20',
            'area' => 'nullable|string|max:255',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'coach',
        ]);

        Coach::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'area' => $request->area,
            'user_id' => $user->id,
        ]);

        return redirect()->route('admin_dashboard')->with('success', 'Coach added successfully.');
    }

    public function destroy(Coach $coach)
    {
        $ongoingClasses = Registration::where('coach_id', $coach->id)
            ->whereIn('status', ['pending', 'accepted'])
            ->exists();

        if ($ongoingClasses) {
            return redirect()->back()->withErrors(['error' => 'Coach cannot be deleted because they have ongoing classes.']);
        }

        $coach->user()->delete();
        $coach->delete();

        return redirect()->route('admin_dashboard')->with('success', 'Coach deleted successfully.');
    }
}
