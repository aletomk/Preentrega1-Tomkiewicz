// ARRAYS DE OBJETOS //

// Acciones
const acciones = [{empresa: "Apple", sector: "Tecnología", pais: "Estados Unidos", varAnual: "26%"},
                  {empresa: "Aramco", sector: "Energía", pais: "Arabia Saudí", varAnual: "5%"},
                  {empresa: "Microsoft", sector: "Tecnología", pais: "Estados Unidos", varAnual: "20%"},
                  {empresa: "Amazon.com", sector: "Tecnología", pais: "Estados Unidos", varAnual: "22%"},
                  {empresa: "Alphabet", sector: "Tecnología", pais: "Estados Unidos", varAnual: "17%"}];

// Acciones Argentinas
const accionesArgentinas = [{empresa: "Comercial del Plata", sector: "Inmobiliario", ambito: "Privado", varAnual: "17%"},
                            {empresa: "G.F Galicia", sector: "Financiero", ambito: "Privado", varAnual: "10%"},
                            {empresa: "Ternium S.A", sector: "Metalúrgica", ambito: "Público", varAnual: "15%"},
                            {empresa: "YPF S.A", sector: "Petrolera", ambito: "Privado", varAnual: "17%"},
                            {empresa: "Aluar", sector: "Industrial", ambito: "Privado", varAnual: "22%"}];

// Indices
const indices = [{nombre: "Dow Jones", continente: "América", pais: "Estados Unidos", empresas: "30"},
                 {nombre: "S&P 500", continente: "América", pais: "Estados Unidos", empresas: "506"},
                 {nombre: "Merval", continente: "América", pais: "Argentina", empresas: "27"},
                 {nombre: "Ibex 35", continente: "Europa", pais: "España", empresas: "35"},
                 {nombre: "Nikkei 225", continente: "Asia", pais: "Japón", empresas: "225"}];

// Criptomonedas
const criptomonedas = [{nombre: "BITCOIN", creacion: "2008", creador: "Satoshi Nakamoto", capitalizacion: "$548,335,700,778"},
                       {nombre: "ETHEREUM", creacion: "2015", creador: "Vitalik Buterin", capitalizacion: "$219,782,099,493"},
                       {nombre: "BNB", creacion: "2017", creador: "Changpeng Zhao", capitalizacion: "$50,066,652,175"},
                       {nombre: "XRP", creacion: "2004", creador: "Ryan Fugger", capitalizacion: "$27,628,055,729"},
                       {nombre: "CARDANO", creacion: "2015", creador: "Charles Hoskinson y Jeremy Wood", capitalizacion: "$14,015,873,398"}];

// Todo en un mismo array
const todo = [acciones, accionesArgentinas, indices, criptomonedas];

let continuar = true;
const TASA_MENSUAL = 6.25;
let interes = 0;