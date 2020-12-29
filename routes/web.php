<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReactController;
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
Route::get('/{path?}',[ReactController::class,'show']);
Route::get('/use-api',[ReactController::class,'user_json']);
Route::post('/register',[ReactController::class,'register_store']);
Route::post('/login',[ReactController::class,'login_store']);
Route::post('/logout',[ReactController::class,'logout']);