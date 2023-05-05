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
const historialSimuladorArray = []
const URL = '';

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

//FUNCIÓN QUE ALMACENA EN LOCAL STORAGE LOS DATOS DE LA SIMULACIÓN
function guardarSimulacionEnLocalStorage() {
    const historialSimulacion = {
        Tipo: selectTipoPlazoFijo[selectTipoPlazoFijo.options.selectedIndex].textContent,
        Capital: inputCapital.value,
        Plazo: inputMeses.value,
        Tasa: TASA_MENSUAL,
        Intereses: interes,
    };
    const historialJSON = JSON.parse(localStorage.getItem("Historial Simulaciones")) || [];
    if (historialJSON.length >= 10) {
        historialJSON.splice(0, 10); // Borrar las primeras 10 simulaciones
    }
    historialJSON.push(historialSimulacion);
    localStorage.setItem("Historial Simulaciones", JSON.stringify(historialJSON));
}

function cargarSimulacion() {
    guardarSimulacionEnLocalStorage();

    const historialJSON = JSON.parse(localStorage.getItem("Historial Simulaciones")) || [];
    const obtenerHistorialJSON = historialJSON.map((consulta) => ({
        Tipo: consulta.Tipo,
        Capital: consulta.Capital,
        Plazo: consulta.Plazo,
        Tasa: consulta.Tasa,
        Intereses: consulta.Intereses,
    }));
    let contenidoTablaHistorial = "";
    tabla_historial.innerHTML = "";
    for (const consulta of obtenerHistorialJSON) {  
      contenidoTablaHistorial +=    `<tr>
                                        <td>$${consulta.Capital}</td>
                                        <td>${consulta.Tipo}</td>
                                        <td>$${consulta.Intereses}</td>
                                        <td>${consulta.Plazo}</td>
                                        <td>${consulta.Tasa}</td>
                                    </tr>`;
    }
    tabla_historial.innerHTML = contenidoTablaHistorial || "";
}

//BOTONES DEL SIMULADOR
btnSimular.addEventListener("click", simulador);

btnHistorial.addEventListener("click", () => {
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
                                       <td>${criptomoneda.abreviatura}</td>
                                       <td>${criptomoneda.creacion}</td>                                     
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
            timer: 1500
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