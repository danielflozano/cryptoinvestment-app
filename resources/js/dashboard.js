let chart;

async function loadData() {

    console.log("Actualizando datos...");

    const response = await fetch("/api/prices");
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
            datasets: [{
                label: "Crypto Prices",
                data: prices,
                borderWidth: 2
            }]
        }
    });
}

loadData();

setInterval(loadData, 10000);