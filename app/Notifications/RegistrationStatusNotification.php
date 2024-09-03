<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class RegistrationStatusNotification extends Notification
{
    use Queueable;

    protected $status;
    protected $class;
    protected $date;
    protected $time;

    /**
     * Create a new notification instance.
     */
    public function __construct($status, $class, $date, $time)
    {
        $this->status = $status;
        $this->class = $class;
        $this->date = $date;
        $this->time = $time;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable)
    {
        $statusMessage = $this->status === 'accepted' ? 'accepted' : 'rejected';

        return (new MailMessage)
            ->line("Your class registration for '{$this->class}' on {$this->date} at {$this->time} has been {$statusMessage}.")
//            ->action('View Your Dashboard', url('/dashboard'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
