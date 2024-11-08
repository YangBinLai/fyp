<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('coach_availabilities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('coach_id');
            $table->date('date');
            $table->time('start_time');
            $table->timestamps();

            // Foreign key relationship
            $table->foreign('coach_id')->references('id')->on('coaches')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coach_availabilities');
    }
};
