<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApiAccount extends Model
{
    use HasFactory;
    protected $fillable = [
        'email',
        'key',
        'password',
        'balance',
        'menuindex'
    ];
}
