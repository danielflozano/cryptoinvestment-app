<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CryptoController extends Controller
{
    public function getCrypto()
    {
        $response = Http::withHeaders([
            'X-CMC_PRO_API_KEY' => env('CMC_API_KEY')
        ])->get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest');

        return $response->json();
    }

    public function getPrices(Request $request)
    {
        $symbols = $request->query('symbol', 'BTC,ETH,ADA');
        $response = Http::withHeaders([
            'X-CMC_PRO_API_KEY' => env('CMC_API_KEY')
        ])->get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', [
            'symbol' => $symbols,
            'convert' => 'USD'
        ]);

        return $response->json();
    }
}
