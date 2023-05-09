const URL_DOLAR = "https://mercados.ambito.com/home/general";
const dolarLI = document.querySelector("li#dolar");
const dolarBlueLI = document.querySelector("li#dolarBlue");
const dolarAhorroLI = document.querySelector("li#dolarAhorro");
const dolarMayoristaLI = document.querySelector("li#dolarMayorista");

//FUNCIÓN QUE MUESTRA LAS COTIZACIONES DEL DOLAR
async function cotizacionDivisas() {
    try {
        const dolar = await fetch(URL_DOLAR);
        const precioDolar = await dolar.json();

        if (precioDolar[0]["class-variacion"] == "up") {
            dolarLI.innerHTML = `<img src="images/sube.png"> <b>Dólar Oficial:</b> <span class="up">$${precioDolar[0].venta}</span>`;
        } else {
            dolarLI.innerHTML = `<img src="images/baja.png"> <b>Dólar Oficial:</b> <span class="down">$${precioDolar[0].venta}</span>`;
        }
        
        if (precioDolar[1]["class-variacion"] == "up") {
            dolarBlueLI.innerHTML = `<img src="images/sube.png"> <b>Dólar Blue:</b> <span class="up">$${precioDolar[1].venta}</span>`;
        } else {
            dolarBlueLI.innerHTML = `<img src="images/baja.png"> <b>Dólar Blue:</b> <span class="down">$${precioDolar[1].venta}</span>`;
        }

        if (precioDolar[2]["class-variacion"] == "up") {
            dolarMayoristaLI.innerHTML = `<img src="images/sube.png"> <b>Dólar Mayorista:</b> <span class="up">$${precioDolar[2].venta}</span>`;
        } else {
            dolarMayoristaLI.innerHTML = `<img src="images/baja.png"> <b>Dólar Mayorista:</b> <span class="down">$${precioDolar[2].venta}</span>`;
        }

        if (precioDolar[3]["class-variacion"] == "up") {
            dolarAhorroLI.innerHTML = `<img src="images/sube.png"> <b>Dólar Ahorro:</b> <span class="up">$${precioDolar[3].venta}</span>`;
        } else {
            dolarAhorroLI.innerHTML = `<img src="images/baja.png"> <b>Dólar Ahorro:</b> <span class="down">$${precioDolar[3].venta}</span>`;
        }
        
    } catch(error) {
        console.error('Error al cargar la API DOLAR:', error);
    };
}
cotizacionDivisas();

//ACTUALIZAR LA COTIZACIÓN CADA 30 SEGUNDOS
setInterval(cotizacionDivisas, 30000);