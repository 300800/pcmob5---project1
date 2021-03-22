<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


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

/*
Route::get('/hello', function () {
    return '<h1>Mabuhay</h1>';
});
Route::get('users/{id}/{name}', function($id, $name){
    return 'This is user ' .$name.' with an id of '.$id;
});
*/

Route::get('/index', [App\Http\Controllers\PagesController::class, 'index'])->name('index');

Route::get('/about', [App\Http\Controllers\PagesController::class, 'about'])->name('about');
Route::get('/services', [App\Http\Controllers\PagesController::class, 'services'])->name('services');
Route::get('/profiles', [App\Http\Controllers\PagesController::class, 'profiles'])->name('profiles');


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'home'])->name('home');
