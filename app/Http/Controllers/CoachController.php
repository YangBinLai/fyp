<?php

namespace App\Http\Controllers;

use App\Models\Coach;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class CoachController extends Controller
{
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
        $coach->user()->delete();
        $coach->delete();

        return redirect()->route('admin_dashboard')->with('success', 'Coach deleted successfully.');
    }
}
