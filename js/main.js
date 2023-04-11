let continuar = true;
const TASA_MENSUAL = 6;

//FUNCIÓN INICIAR CONSULTA DE PLAZO FIJO

function iniciarConsulta() {
    let capital = parseInt(prompt("💲Ingrese el capital a invertir\n¡¡Por favor sin letras, puntos ni espacios y mayor a $999!!").trim());
    if (!isNaN(capital) && (capital >= 1000)){
        let meses = prompt("📅Ingrese la cantidad de meses que usted desea (hasta 60)").trim();
            if (meses >= 1 && meses <=60) {
                let interes = (capital * (TASA_MENSUAL * meses))/100;
                let dineroTotal = capital + interes;
                if (meses == 1) {
                alert(`✅Ud. tendrá \$${Math.round(dineroTotal)} en un plazo de ${meses} mes`);
                } else{
                    alert(`✅Ud. tendrá \$${Math.round(dineroTotal)} en un plazo de ${meses} meses`);
                }
            } else{
                alert("⛔Los datos ingresados no son validos, por favor vuelve a intentarlo");
            }            
    } else{
        alert("⛔Los datos ingresados no son validos, por favor vuelve a intentarlo");
    }
}

function plazoFijo() {
    while(continuar){
        iniciarConsulta();
        continuar = confirm("¿Deseas volver a probar con otro capital?");
    }
    alert("No hay problema, gracias por su visita😉");
}

//FUNCIÓN INICIAR CONSULTA DE PLAZO FIJO CON INTERES COMPUESTO

function iniciarConsultaCompuesto() {
    let capital = parseInt(prompt("💲Ingrese el capital a invertir\n¡¡Por favor sin letras, puntos ni espacios y mayor a $999!!").trim());
    if (!isNaN(capital) && (capital >= 1000)){
        let meses = prompt("📅Ingrese la cantidad de meses que usted desea (hasta 60)").trim();
            if (meses >= 1 && meses <=60) {
                for(let i = 1; i <= meses; i++){
                    let interes = (capital * TASA_MENSUAL)/100;
                    capital = capital + interes;
                }
                let dineroTotal = parseInt(capital);
                if (meses == 1) {
                alert(`✅Ud. tendrá \$${Math.round(dineroTotal)} en un plazo de ${meses} mes`);
                } else{
                    alert(`✅Ud. tendrá \$${Math.round(dineroTotal)} en un plazo de ${meses} meses`);
                }
            } else{
                alert("⛔Los datos ingresados no son validos, por favor vuelve a intentarlo");
            }            
    } else{
        alert("⛔Los datos ingresados no son validos, por favor vuelve a intentarlo");
    }
}

function plazoFijoCompuesto() {
    while(continuar){
        iniciarConsultaCompuesto();
        continuar = confirm("¿Deseas volver a probar con otro capital?");
    }
    alert("No hay problema, gracias por su visita😉");
}

//FUNCIONES QUE MUESTRAN LOS ARRAYS EN FORMA DE TABLA

function accionesF() {
    console.table(acciones);
}

function accionesArgF() {
    console.table(accionesArgentinas);
}

function indicesF() {
    console.table(indices);
}

function criptomonedasF() {
    console.table(criptomonedas);
}

//MÉTODO FIND 
function buscarCriptmoneda() {
    let cripto = prompt("Ingresa el nombre de la criptomoneda a buscar:").toUpperCase();
    let resultado = criptomonedas.find((criptomoneda) => criptomoneda.nombre == cripto);
        if (resultado !== undefined) {
            console.table(resultado);
        } else{
            console.warn("😢No se encontró la criptomoneda indicada", cripto);
        }
}

//MÉTODO MAP
function nombreIndicices() {
    let arraySimplificado = indices.map((indice) => {
        return {nombre: indice.nombre};
    })
    console.table(arraySimplificado);
}

//IMPLEMENTANDO DOM AL PROYECTO
//funcion tabla acciones
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

//funcion tabla acciones argentinas
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

//funcion tabla indices
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

//funcion tabla criptomonedas
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
                                   <tr>`;
        }
        tabla.innerHTML = contenidoTablaHTML || "";
}
tablaCriptomonedasHTML();