<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('login');
})->name('/');

Route::post('/pros_login', [App\Http\Controllers\LoginController::class, 'login'])->name('pros_login');
Route::get('/cerrar_sesion', [App\Http\Controllers\LoginController::class, 'logout'])->name('cerrar_sesion');

//ROUTES
Route::group(['middleware' => 'session'], function () {
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    Route::post('/data', [App\Http\Controllers\HomeController::class, 'data'])->name('data');
    Route::post('/data_premio', [App\Http\Controllers\HomeController::class, 'data_premio'])->name('data_premio');
});
