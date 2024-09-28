<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use Carbon\Carbon;
use Inertia\Inertia;
use Stripe\Tax\Transaction;

class PaymentController extends Controller
{
    public function onsuccess($id): \Inertia\Response
    {
        $registration = Registration::find($id);

        // Get the current date and the class date
        $currentDate = Carbon::now();
        $classDate = Carbon::parse($registration->date);

        // If the class date is in the past, mark payment as paid
        if ($classDate->isPast()) {
            $registration->update([
                'payment_status' => 'paid',
            ]);
        } else {
            // Update the payment status to 'paid' if payment was processed
            $registration->update([
                'payment_status' => 'paid',
            ]);
        }

        $registrations = Registration::with('coach')
            ->where('user_id', auth()->id())
            ->get();

        return Inertia::render('Guest/User_dashboard', [
            'registrations' => $registrations,
        ]);
    }


    public function processPayment($id): \Illuminate\Http\RedirectResponse
    {
        $registration = Registration::find($id);

        $classDate = Carbon::parse($registration->date);

        // If the class date has passed, mark as paid and skip Stripe payment
        if ($classDate->isPast()) {
            $registration->update([
                'payment_status' => 'paid',  // Mark as paid because they paid on the spot
            ]);

            return redirect()->route('user_dashboard')->with('success', 'Payment marked as paid since the class has already occurred.');
        }

        // Continue with Stripe payment process if the class date is in the future
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));

        $checkout_session = $stripe->checkout->sessions->create([
            'line_items' => [[
                'price_data' => [
                    'currency' => 'myr',
                    'product_data' => [
                        'name' => $registration->class,
                    ],
                    'unit_amount' => $registration->price * 100,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => route('payment.success', ['id' => $id]),
            'cancel_url' => route('payment.cancel', ['id' => $id]),
        ]);

        $registration->update([
            'payment_status' => 'pending',  // Mark payment as pending
        ]);

        return redirect()->route('user_dashboard')->with('url', $checkout_session->url);
    }

    public function oncancel(): \Inertia\Response
    {
        $registrations = Registration::with('coach')
            ->where('user_id', auth()->id())
            ->get();

        return Inertia::render('Guest/User_dashboard', [
            'registrations' => $registrations,
        ]);
    }


    public function webhook(): \Illuminate\Foundation\Application|\Illuminate\Http\Response|\Illuminate\Contracts\Routing\ResponseFactory
    {
        $endpoint_secret = env('STRIPE_WEBHOOK_KEY');
        $payload = @file_get_contents('php://input');
        $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        try{
            $event = \Stripe\Webhook::constructEvent(
                $payload,
                $sig_header,
                $endpoint_secret,
            );
        }catch (\UnexpectedValueException $e){
            return response('', 400);
        }catch (\Stripe\Exception\SignatureVerificationException $e){
            return response('', 400);
        }

        switch ($event->type){
            case 'payment.cancel':
                $session = $event->data->object;

                $transaction = Transaction::where('session_id',
                $session->id)->first();
                if($transaction && $transaction->status = 'pending'){
                    $transaction->status = 'paid';
                    $transaction->save();
                    $transaction->user->avaliable_credits +=
                         $transaction->credits;
                    $transaction->user->save();
                }
            default:
                echo 'Received unknown event type' . $event->type;
        }
        return response('');
    }
}
