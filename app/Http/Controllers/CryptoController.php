<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CryptoController extends Controller
{
    public function getPrices()
    {
        $response = Http::withHeaders([
            'X-CMC_PRO_API_KEY' => env('CMC_API_KEY')
        ])->get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', [
            'symbol' => 'BTC,ETH,ADA',
            'convert' => 'USD'
        ]);

        return $response->json();
    }
}
