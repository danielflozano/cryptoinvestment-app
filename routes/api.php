<?php

use App\Http\Controllers\CryptoController;
use Illuminate\Support\Facades\Route;

Route::get('/prices', [CryptoController::class, 'getPrices']);
Route::get('/cryptos', [CryptoController::class, 'getCrypto']);
