<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __invoke() ///porque es una vez
    {
        return view('home');
    }
}
