 <x-layout>
     <x-slot:title>
         CryptoInvestment Dashboard
     </x-slot:title>

     @push('scripts')
     <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
     @vite(['resources/js/dashboard.js'])
     @endpush

     <main class="bg-slate-50 p-4 flex flex-col gap-2">
         <h1 class="text-4xl text-center">CryptoInvestment Dashboard</h1>

         <select id="selectCrypto" class="w-full appearance-none bg-white border border-blue-100 text-slate-700 text-sm font-medium rounded-2xl px-5 py-3.5 pr-12
                   shadow-[0_4px_15px_rgba(59,130,246,0.05)] 
                   focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400
                   transition-all duration-300 cursor-pointer hover:border-blue-200">
             <option value="" disabled>Seleccionar Moneda</option>
         </select>

         <div class="w-full overflow-x-auto bg-white rounded-2xl shadow-sm border border-blue-50">
             <table class="w-full text-left border-collapse">
                 <thead>
                     <tr class="text-blue-400 text-[11px] uppercase tracking-widest border-b border-blue-50">
                         <th class="px-6 py-4 font-semibold">Crypto</th>
                         <th class="px-6 py-4 font-semibold">Price</th>
                         <th class="px-6 py-4 font-semibold">24h %</th>
                         <th class="px-6 py-4 font-semibold">Volume</th>
                     </tr>

                 </thead>
                 <tbody id="cryptoTable" class="divide-y divide-blue-50"></tbody>
             </table>
         </div>
         
         <div class="bg-white rounded-2xl shadow-sm border border-blue-50">
             <canvas id="chart"></canvas>
         </div>
     </main>
 </x-layout>