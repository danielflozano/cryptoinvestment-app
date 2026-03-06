 <x-layout>
     <x-slot:title>
         CryptoInvestment Dashboard
     </x-slot:title>

     @push('scripts')
     <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
     @vite(['resources/js/dashboard.js'])
     @endpush

     <h1 class="text-2xl">CryptoInvestment Dashboard</h1>

     <table class="border">
         <thead>

             <tr>
                 <th>Crypto</th>
                 <th>Price</th>
                 <th>24h %</th>
                 <th>Volume</th>
             </tr>

         </thead>

         <tbody id="cryptoTable"></tbody>

     </table>

     <canvas id="chart"></canvas>

     <!-- <script src="/js/app.js"></script> -->
 </x-layout>