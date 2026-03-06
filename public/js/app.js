async function loadData() {
    const response = await fetch("/api/prices");

    const data = await response.json();

    const table = document.getElementById("cryptoTable");

    table.innerHTML = "";

    const cryptos = data.data;

    for (const symbol in cryptos) {
        const crypto = cryptos[symbol];

        const price = crypto.quote.USD.price;
        const change = crypto.quote.USD.percent_change_24h;
        const volume = crypto.quote.USD.volume_24h;

        table.innerHTML += `
          <tr>
          <td>${symbol}</td>
          <td>${price}</td>
          <td>${change}</td>
          <td>${volume}</td>
          </tr>
          `;
    }

    console.log('Si actualiza cada 10 seg');
    
}

loadData();

setInterval(loadData, 3600000);

// 3600000

let chart;

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
                    label: "BTC Price",
                    data: prices,
                },
            ],
        },
    });
}
