<?php

use Illuminate\Support\Facades\Route;

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
use App\Http\Controllers\Admin\AdminController;
Route::group(['middleware' => 'web'], function () {
    Route::get('/admin', [AdminController::class, 'index'])->where('any', '.*')->name('laravue');
});
Route::group(['middleware' => 'web'], function () {
    Route::get('/admin/{any}', [AdminController::class, 'index'])->where('any', '.*')->name('admin');
});
