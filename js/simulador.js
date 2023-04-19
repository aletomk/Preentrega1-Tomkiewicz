const selectTipoPlazoFijo = document.querySelector("select#tipoPlazoFijo");
const inputCapital = document.querySelector("input#capital");
const inputMeses = document.querySelector("input#meses");
const btnSimular = document.querySelector("button.btn.btn-outline-primary");
const btnGuardar = document.querySelector("button.btn.btn-outline-info");
const resultadoSimulador = document.querySelector("span#resultadoSimulador");

//FUNCIÓN QUE SIMULA EL PLAZO FIJO

function simulador() {
    if (selectTipoPlazoFijo.value === "Interes simple"){
        if ((inputCapital.value >= 1000 && inputCapital.value <= 40000000) && (inputMeses.value >= 1 && inputMeses.value <= 60)) {
        const simulacionSimple = new Simulador(selectTipoPlazoFijo.value, inputCapital.value, inputMeses.value);
        resultadoSimulador.textContent = simulacionSimple.simularSimple();
        montoInicial.textContent = inputCapital.value;
        intereses.textContent = interes;
        plazo.textContent = inputMeses.value;
        } else {
            alert("Los datos ingresados no son correctos⛔");
        }
    } else{
        if ((inputCapital.value >= 1000 && inputCapital.value <= 40000000) && (inputMeses.value >= 1 && inputMeses.value <= 60)) {
        const simulacionCompuesto = new Simulador(selectTipoPlazoFijo.value, inputCapital.value, inputMeses.value);
        resultadoSimulador.textContent = simulacionCompuesto.simularCompuesto();
        montoInicial.textContent = inputCapital.value;
        intereses.textContent = parseInt(interes);
        plazo.textContent = inputMeses.value;
        } else {
            alert("Los datos ingresados no son correctos⛔");
        }
    }
}

btnSimular.addEventListener("click", simulador);

btnGuardar.addEventListener("click", () => {
    const historialSimulacion = {
        Tipo: selectTipoPlazoFijo[selectTipoPlazoFijo.options.selectedIndex].textContent,
        Capital: inputCapital.value,
        Plazo: inputMeses.value,
        Tasa: TASA_MENSUAL,
        Intereses: interes
    };
    localStorage.setItem("Ultima Simulación", JSON.stringify(historialSimulacion));
});