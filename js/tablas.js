//TABLA ACCIONES
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

//TABLA ACCIONES ARGENTINAS
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

//TABLA INDICES
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

//TABLA CRIPTOMONEDAS
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