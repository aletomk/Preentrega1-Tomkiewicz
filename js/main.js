let continuar = true;

function iniciarConsulta() {
    const TASA_MENSUAL = 6;
    let capital = parseInt(prompt("💲Ingrese el capital a invertir\n¡¡Por favor sin letras, puntos ni espacios y mayor a $999!!").trim());
    if (!isNaN(capital) && (capital >= 1000)){
        let meses = prompt("📅Ingrese la cantidad de meses que usted desea (hasta 12)").trim();
            if (meses == 1 || meses == 2 || meses == 3 || meses == 4 || meses == 5 || meses == 6 || meses == 7 || meses == 8 || meses == 9 || meses == 10 || meses == 11 || meses == 12) {
                let interes = (capital * (TASA_MENSUAL * meses))/100;
                let dineroTotal = capital + interes;
                if (meses == 1) {
                alert("✅Ud. tendrá $" + dineroTotal + " en un plazo de " + meses + " mes");
                } else{
                    alert("✅Ud. tendrá $" + dineroTotal + " en un plazo de " + meses + " meses");
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