<?php

use App\Http\Controllers\CarroController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// mostrar todos los carros
Route::get('carros', [CarroController::class,'getCarro']);

// mostrar un carro específico
Route::get('carros/{id}', [CarroController::class,'getCarroById']);

// agregar nuevo carro
Route::post('addCarro',[CarroController::class,'addCarro']);

// actualizar carro
Route::Put('updateCarro/{id}', [CarroController::class,'updateCarro']);

// borrar carro
Route::delete('deleteCarro/{id}', [CarroController::class,'deleteCarro']);

//imagen  guardar
Route::post('/imagen', [CarroController::class, 'uploadimage'])->name('imagen');


//imagen ver
Route::get('/imagenver',[CarroController::class, 'verimagen'])->name('verimagenw');