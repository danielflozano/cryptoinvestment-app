let chart;

const fetchData = async (selectCrypto) => {
    if (!selectCrypto) {
      selectCrypto = 'BTC,ETH,ADA'
    }
    try {
        const response = await fetch(`/api/prices?symbol=${selectCrypto}`);
        const data = await response.json();

        const table = document.getElementById("cryptoTable");
        table.innerHTML = "";

        const cryptos = data.data;

        const labels = [];
        const prices = [];

        for (const symbol in cryptos) {
            const crypto = cryptos[symbol];

            const price = crypto.quote.USD.price;
            const change = crypto.quote.USD.percent_change_24h;
            const volume = crypto.quote.USD.volume_24h;

            table.innerHTML += `
        <tr class="border-b">
            <td class="p-2">${symbol}</td>
            <td class="p-2">$${price.toFixed(2)}</td>
            <td class="p-2">${change.toFixed(2)}%</td>
            <td class="p-2">$${volume.toFixed(0)}</td>
        </tr>
        `;

            labels.push(symbol);
            prices.push(price);
        }

        drawChart(labels, prices);
    } catch (error) {
        // alert('No se pudo cargar la data');
    }
};

const fetchCryptos = async () => {
    try {
        const responseCrypto = await fetch("/api/cryptos");
        const dataCryptos = await responseCrypto.json();

        const select = document.getElementById("selectCrypto");
        select.innerHTML =
            '<option value="" disabled>Seleccionar Moneda</option>';
        dataCryptos.data.forEach((crypto) => {
            const option = document.createElement("option");
            option.value = crypto.symbol; // Guardamos el símbolo (BTC)
            option.textContent = `${crypto.name} (${crypto.symbol})`;
            selectCrypto.appendChild(option);
        });
    } catch (error) {
        console.error(error);
    }
};

async function loadData() {
    console.log("Actualizando datos...");
    fetchData();
    fetchCryptos();
}

const watchSelect = () => {
  document.getElementById('selectCrypto').addEventListener('change', async function(e){
    const selectCrypto = e.target.value;
    console.log(selectCrypto);
    
    fetchData(selectCrypto);
  });
}

function drawChart(labels, prices) {
    const ctx = document.getElementById("chart");

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Crypto Prices",
                    data: prices,
                    borderWidth: 2,
                },
            ],
        },
    });
}

loadData();
watchSelect();

setInterval(loadData, 1000000000);
