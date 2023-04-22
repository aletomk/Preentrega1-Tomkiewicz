class Simulador {
    constructor(tipo, capital, meses) {
        this.tipo = tipo;
        this.capital = parseInt(capital);
        this.meses = parseInt(meses);
    }
    simularSimple() {
        interes = ((this.capital * (TASA_MENSUAL * this.meses))/100);
        this.capital = this.capital + interes;
        return (this.capital);
    }
    simularCompuesto() {
        for(let i = 1; i <= this.meses; i++){
            interes = (this.capital * TASA_MENSUAL)/100;
            this.capital = this.capital + interes;       
        }
        interes = this.capital - inputCapital.value;
        return (parseInt(this.capital));
    }
}