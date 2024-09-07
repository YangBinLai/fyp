<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Stripe\Tax\Transaction;

class PaymentController extends Controller
{
    public function onsuccess(): \Inertia\Response
    {
        return Inertia::render('Guest/User_dashboard');
    }

    public function processPayment(Request $request): \Illuminate\Http\RedirectResponse
    {
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));

        $checkout_session = $stripe->checkout->sessions->create([
            'line_items' => [[
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => 'Customer',
                    ],
                    'unit_amount' => 100,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => route('payment.success'),
            'cancel_url' => route('payment.cancel'),
        ]);

        return redirect()->route('user_dashboard')->with('url', $checkout_session->url);
    }

    public function oncancel(): \Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Foundation\Application
    {
        return view('user_dashboard');
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
