<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CoachAvailabilityController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CoachController;
use App\Http\Controllers\RegisterClassController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserDashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('Guest/About');
})->name('about');

Route::get('/classes', function () {
    return Inertia::render('Guest/Classes');
})->name('classes');

Route::get('/fees', function () {
    return Inertia::render('Guest/Fees');
})->name('fees');

Route::get('/venues', function () {
    return Inertia::render('Guest/Venues');
})->name('venues');

Route::get('/career', function () {
    return Inertia::render('Guest/Careers');
})->name('career');

Route::get('/baby_class', function () {
    return Inertia::render('Guest/Baby_Class');
})->name('baby_class');

Route::get('/kid_class', function () {
    return Inertia::render('Guest/Kid_Class');
})->name('kid_class');

Route::get('/adult_class', function () {
    return Inertia::render('Guest/Adult_Class');
})->name('adult_class');

Route::get('/private_class', function () {
    return Inertia::render('Guest/Private_Class');
})->name('private_class');

Route::get('/admin_dashboard', function () {
    $user = Auth::getUser();
    if($user->role!='admin'){
        return response()->json(['message' => 'unauthorized']);
    }
    return Inertia::render('Admin/Admin_Dashboard');
})->name('admin_dashboard');

Route::get('/register_class', function () {
    return Inertia::render('Guest/Register_Class');
})->name('register_class');


Route::get('/coach-availability', function () {
    return Inertia::render('Guest/Coach_Availability');
})->name('coach_availability');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/admin_dashboard', [AdminController::class, 'index'])->name('admin_dashboard');
    Route::post('/coaches', [CoachController::class, 'store'])->name('coaches.store');
    Route::delete('/coaches/{coach}', [CoachController::class, 'destroy'])->name('coaches.destroy');
    Route::get('/coach_availability', [CoachAvailabilityController::class, 'showCoachAvailability'])->name('coach_availability');

    Route::post('/register_class/submit', [RegisterCLassController::class, 'submit'])->name('register_class.submit');
    Route::get('/registrations/{registration}/edit', [RegisterClassController::class, 'edit'])->name('registrations.edit');
    Route::put('/registrations/{registration}', [RegisterClassController::class, 'update'])->name('registrations.update');
    Route::delete('/registrations/{id}', [RegisterClassController::class, 'destroy'])->name('registrations.destroy');
    Route::post('/registrations/{id}/accept', [RegisterCLassController::class, 'accept'])->name('registrations.accept');
    Route::post('/registrations/{id}/reject', [RegisterCLassController::class, 'reject'])->name('registrations.reject');

    Route::get('/coach_dashboard', [CoachController::class, 'index'])->name('coach_dashboard');
    Route::get('/user_dashboard', [UserDashboardController::class, 'index'])->name('user_dashboard');

    Route::post('/process_payment/{id}', [PaymentController::class, 'processPayment'])->name('process_payment');
    Route::get('/process_payment/success/{id}', [PaymentController::class, 'onsuccess'])->name('payment.success');
    Route::get('/process_payment/cancel', [PaymentController::class, 'oncancel'])->name('payment.cancel');
    Route::post('/process_payment/webhook', [PaymentController::class, 'webhook'])->name('payment.webhook');
});

require __DIR__.'/auth.php';
