//CONSTANTES
const selectTipoPlazoFijo = document.querySelector("select#tipoPlazoFijo");
const inputCapital = document.querySelector("input#capital");
const inputMeses = document.querySelector("input#meses");
const inputCriptomoneda = document.querySelector("input#criptomoneda");
const btnSimular = document.querySelector("button.btn.btn-outline-primary");
const btnGuardar = document.querySelector("button.btn.btn-outline-info");
const btnHistorial = document.querySelector("button.btn.btn-outline-danger");
const resultadoSimulador = document.querySelector("span#resultadoSimulador");
const tabla = document.querySelector("tbody.criptomonedas");
const URL = 'https://jsonplaceholder.typicode.com/todos';

//FETCH
fetch(URL)
    .then(response => response.json())
    .then(data => mostrarHistorial(data))
    .catch(error => console.log(error))

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