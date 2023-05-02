//CONSTANTES
const selectTipoPlazoFijo = document.querySelector("select#tipoPlazoFijo");
const inputCapital = document.querySelector("input#capital");
const inputMeses = document.querySelector("input#meses");
const inputCriptomoneda = document.querySelector("input#criptomoneda");
const btnSimular = document.querySelector("button.btn.btn-outline-primary");
const btnGuardar = document.querySelector("button.btn.btn-outline-info");
const btnFiltrar = document.querySelector("button.btn.btn-outline-warning.filtrar");
const btnBuscar = document.querySelector("button.btn.btn-outline-warning");
const resultadoSimulador = document.querySelector("span#resultadoSimulador");

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


//BOTONES DEL SIMULADOR
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
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Tu simulación ha sido guardada con exito!',
    showConfirmButton: false,
    timer: 1500
    });
});

//TABLAS
function tablaAccionesHTML() { 
    let contenidoTablaHTML = "";
    const tabla = document.querySelector("tbody.acciones");
        tabla.innerHTML = "";
        for (accion of acciones) {
            contenidoTablaHTML += `<tr>
                                       <td>${accion.empresa}</td>
                                       <td>${accion.sector}</td>
                                       <td>${accion.pais}</td>
                                       <td>${accion.varAnual}</td>
                                   <tr>`;
        }
        tabla.innerHTML = contenidoTablaHTML || "";
}
tablaAccionesHTML();

function tablaAccionesArgHTML() { 
    let contenidoTablaHTML = "";
    const tabla = document.querySelector("tbody.accionesArgentinas");
        tabla.innerHTML = "";
        for (accion of accionesArgentinas) {
            contenidoTablaHTML += `<tr>
                                       <td>${accion.empresa}</td>
                                       <td>${accion.sector}</td>
                                       <td>${accion.ambito}</td>
                                       <td>${accion.varAnual}</td>
                                   <tr>`;
        }
        tabla.innerHTML = contenidoTablaHTML || "";
}
tablaAccionesArgHTML();

function tablaIndicesHTML() { 
    let contenidoTablaHTML = "";
    const tabla = document.querySelector("tbody.indices");
        tabla.innerHTML = "";
        for (indice of indices) {
            contenidoTablaHTML += `<tr>
                                       <td>${indice.nombre}</td>
                                       <td>${indice.continente}</td>
                                       <td>${indice.pais}</td>
                                       <td>${indice.empresas}</td>
                                   <tr>`;
        }
        tabla.innerHTML = contenidoTablaHTML || "";
}
tablaIndicesHTML();

function tablaCriptomonedasHTML() { 
    let contenidoTablaHTML = "";
    const tabla = document.querySelector("tbody.criptomonedas");
        tabla.innerHTML = "";
        for (criptomoneda of criptomonedas) {
            contenidoTablaHTML += `<tr>
                                       <td>${criptomoneda.nombre}</td>
                                       <td>${criptomoneda.creacion}</td>
                                       <td>${criptomoneda.creador}</td>
                                       <td>${criptomoneda.capitalizacion}</td>
                                   </tr>`;
        }
        tabla.innerHTML = contenidoTablaHTML || "";
}
tablaCriptomonedasHTML();

//MÉTODO FIND 
function buscarCriptmoneda() {
    let tablaReducidaHTML = "";
    const tabla = document.querySelector("tbody.criptomonedas");
    const cripto = criptomonedas.find(criptomoneda => criptomoneda.nombre.includes(inputCriptomoneda.value.toUpperCase()));
    
}

function filtrarCriptomoneda() {
    let nuevaTablaHTML = "";
    const tablaSimplificada = document.querySelector("table.tabla_simplificada");

    let valor = (inputCriptomoneda.value).toUpperCase();
    const resultado = criptomoneda.filter((criptomoneda) => criptomoneda.includes(valor));
    btnBuscar.addEventListener("click", () => {
        nuevaTablaHTML +=   `<thead>    
                                <tr>
                                    <th>NOMBRE</th>
                                    <th>CREACIÓN</th>
                                    <th>CREADOR</th>
                                    <th>CAPITALIZACIÓN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${resultado.nombre}</td>
                                    <td>${resultado.creacion}</td>
                                    <td>${resultado.creador}</td>
                                    <td>${resultado.capitalizacion}</td>
                                </tr>
                            </tbody>`;
    });
    tablaSimplificada.innerHTML = nuevaTablaHTML || "";
}
filtrarCriptomoneda();

//MÉTODO MAP
function nombreIndicices() {
    let arraySimplificado = indices.map((indice) => {
        return {nombre: indice.nombre};
    })
    console.table(arraySimplificado);
}

//FUNCION QUE INHIBE EL PUNTO Y LA COMA EN LOS INPUTS
function filtro() {
var tecla = event.key;
if (['.',',','e'].includes(tecla))
   event.preventDefault()
}