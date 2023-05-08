const BASE_URL = 'https://api.coingecko.com/api/v3';
const ENDPOINT = '/simple/price';
const CURRENCY = 'usd';
const MONEDA = 'bitcoin';
const URL = 'https://www.alphavantage.co/query?function=SECTOR&apikey=CH6QCHQ67ZEW8GJ4&sector=realtime&size=10';

fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        if (data && data['Rank F: Real-Time Performance']) {
            const acciones = data['Rank F: Real-Time Performance'];
            const top10 = Object.entries(acciones).map(([symbol, info]) => ({ symbol, info }));
            console.log(top10);
        } else {
            console.error('No se encontraron datos de acciones.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });