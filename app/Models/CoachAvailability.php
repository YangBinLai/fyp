<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoachAvailability extends Model
{
    use HasFactory;
    protected $fillable = ['coach_id', 'date', 'start_time'];

    public function coach()
    {
        return $this->belongsTo(Coach::class);
    }
}
