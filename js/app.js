//CONSTANTES
const selectTipoPlazoFijo = document.querySelector("select#tipoPlazoFijo");
const inputCapital = document.querySelector("input#capital");
const inputMeses = document.querySelector("input#meses");
const inputCriptomoneda = document.querySelector("input#criptomoneda");
const btnSimular = document.querySelector("button#boton-simular");
const btnHistorial = document.querySelector("button#boton-historial");
const resultadoSimulador = document.querySelector("span#resultadoSimulador");
const tabla = document.querySelector("tbody.criptomonedas");
const tabla_historial = document.querySelector("tbody#historial");
const DateTime = luxon.DateTime.now();
const FECHA_HOY = DateTime.toLocaleString(DateTime.DATE_SHORT);

//FUNCIÓN QUE SIMULA EL PLAZO FIJO
function simulador() {
    if ((inputCapital.value >= 1000) && (inputMeses.value >= 1 && inputMeses.value <= 60)) {
    if (selectTipoPlazoFijo.value === "Interes simple") {
        const simulacionSimple = new Simulador(selectTipoPlazoFijo.value, inputCapital.value, inputMeses.value);
        resultadoSimulador.textContent = simulacionSimple.simularSimple();
        montoInicial.textContent = inputCapital.value;
        intereses.textContent = interes;
        plazo.textContent = inputMeses.value;
        } else{
            const simulacionCompuesto = new Simulador(selectTipoPlazoFijo.value, inputCapital.value, inputMeses.value);
            resultadoSimulador.textContent = simulacionCompuesto.simularCompuesto();
            montoInicial.textContent = inputCapital.value;
            intereses.textContent = parseInt(interes);
            plazo.textContent = inputMeses.value;
        }
    } else{
            Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos',
                text: 'Por favor, ingrese los datos correctamente!',
            });
    }
}

//FUNCIÓN QUE ALMACENA EN LOCAL STORAGE LA SIMULACIÓN
function guardarSimulacionEnLocalStorage() {
    const historialSimulacion = {
        Tipo: selectTipoPlazoFijo[selectTipoPlazoFijo.options.selectedIndex].textContent,
        Capital: inputCapital.value,
        Plazo: inputMeses.value,
        Fecha: FECHA_HOY,
        Intereses: parseInt(interes),
    };
    const historialJSON = JSON.parse(localStorage.getItem("Historial Simulaciones")) || [];
    if (historialJSON.length >= 10) {
        historialJSON.splice(0, 1);
    }
    historialJSON.push(historialSimulacion);
    localStorage.setItem("Historial Simulaciones", JSON.stringify(historialJSON));
}

//FUNCIÓN QUE MUESTRA LAS ULTIMAS SIMULACIONES
function cargarSimulacion() {
    const historialJSON = JSON.parse(localStorage.getItem("Historial Simulaciones")) || [];
    const obtenerHistorialJSON = historialJSON.map((detalle) => ({
        Tipo: detalle.Tipo,
        Capital: detalle.Capital,
        Plazo: detalle.Plazo,
        Fecha: detalle.Fecha,
        Intereses: detalle.Intereses,
    }));
    let contenidoTablaHistorial = "";
    tabla_historial.innerHTML = "";
    for (const detalle of obtenerHistorialJSON) {  
      contenidoTablaHistorial +=    `<tr>
                                        <td>$${detalle.Capital}</td>
                                        <td class="historial_tipo">${detalle.Tipo}</td>
                                        <td>$${detalle.Intereses}</td>
                                        <td>${detalle.Plazo}</td>
                                        <td>${detalle.Fecha}</td>
                                    </tr>`;
    }
    tabla_historial.innerHTML = contenidoTablaHistorial || "";
}

//FUNCIÓN QUE REUNE LA SIMULACIÓN Y EL GUARDADO DE DATOS EN LOCAL STORAGE
function simularYGuardar() {
    simulador();
    guardarSimulacionEnLocalStorage();
}

//BOTONES DEL SIMULADOR
btnSimular.addEventListener("click", () => {
    if (inputCapital.value === "" || inputMeses.value === "") {
        Swal.fire({
            icon: "error",
            title: "Campos vacíos",
            text: "Por favor, complete todos los campos del formulario",
        });
        return;
    } else if (inputCapital.value < 1000 || (inputMeses.value < 1 || inputMeses.value > 60)) {
        Swal.fire({
            icon: "error",
            title: "Datos incorrectos",
            text: "Por favor, complete todos los campos correctamente",
        });
    }
    else {
        simularYGuardar();
    }
});

btnHistorial.addEventListener("click", () => {
    if (inputCapital.value === "" || inputMeses.value === "") {
        Swal.fire({
            icon: "error",
            title: "Sin simulación",
            text: "Usted debe simular al menos una vez para ver su historial",
        });
        return;
    } else if (inputCapital.value < 1000 || (inputMeses.value < 1 || inputMeses.value > 60)) {
        Swal.fire({
            icon: "error",
            title: "Datos incorrectos",
            text: "Por favor, complete todos los campos correctamente",
        });
    }
    else {
        cargarSimulacion();
    }
});

//TABLA
function tablaCriptomonedasHTML(array) { 
    let contenidoTablaHTML = "";
        tabla.innerHTML = "";
        array.forEach(criptomoneda => {
            contenidoTablaHTML += `<tr>
                                       <td>${criptomoneda.nombre}</td>
                                       <td class="tabla_col">${criptomoneda.abreviatura}</td>
                                       <td class="tabla_col">${criptomoneda.creacion}</td> 
                                       <td>${criptomoneda.circulacion}</td>
                                   </tr>`
        });
        tabla.innerHTML = contenidoTablaHTML || "";
}
tablaCriptomonedasHTML(criptomonedas);

//METODOS DE TRANSFORMACIÓN
function filtrarCriptomoneda(valor) {
    let resultado = criptomonedas.filter((criptomoneda) => 
        criptomoneda.nombre.toUpperCase().includes(valor.toUpperCase())
    );
    if (resultado.length > 0) {
        tablaCriptomonedasHTML(resultado);
    } else{
        Swal.fire({
            icon: 'error',
            title: 'No se encontraron coincidencias',
            text: 'Por favor, vuelva a intentarlo',
            timer: 2000
        });
    }
}

inputCriptomoneda.addEventListener("search", (e)=> {
    filtrarCriptomoneda(e.target.value);
});

//FUNCION QUE INHIBE EL PUNTO Y LA COMA EN LOS INPUTS
function filtro() {
var tecla = event.key;
if (['.',',','e'].includes(tecla))
   event.preventDefault()
}