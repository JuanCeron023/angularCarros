<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carro extends Model
{
    use HasFactory;
    public $timestamp = false;
    protected $fillable = ['nombre','cilindraje','caballosfuerza','aceleracion','precio','imagen'];
}
