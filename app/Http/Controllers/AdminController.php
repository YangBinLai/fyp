<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coach;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $coaches = Coach::all();

        return Inertia::render('Admin/Admin_Dashboard', [
            'coaches' => $coaches
        ]);
    }
}
