<?php

use App\Http\Controllers\CryptoController;
use Illuminate\Support\Facades\Route;

Route::get('/prices', [CryptoController::class, 'getPrices']);