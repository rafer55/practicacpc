<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::view('/inicio','home')->name('paginicio');
Route::view('/contacto','contact')->name('contactanos');
Route::post('/contactpost', 'consultascontroller@store')->name('contactpost');
Route::get('/listadeconsultas','consultascontroller@read')->name('listaconsultas');
Route::get('/editconsult/{id}', 'consultascontroller@edit');
Route::post('updateconsulta/{id}', 'consultascontroller@update')->name('updateconsulta');
Route::get('deleteconsulta/{id}', 'consultascontroller@destroy');
