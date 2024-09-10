<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    use HasFactory;

    protected $fillable = ['date', 'class', 'time', 'area', 'coach_id', 'user_id', 'status', 'payment_status', 'price'];

    public function coach()
    {
        return $this->belongsTo(Coach::class, 'coach_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
