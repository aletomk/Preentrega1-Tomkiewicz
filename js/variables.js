// ARRAY DE OBJETOS //
const criptomonedas = [{nombre: "BITCOIN", creacion: "2008", abreviatura: "BTC", circulacion: "19,363,168 BTC"},
                       {nombre: "ETHEREUM", creacion: "2015", abreviatura: "ETH", circulacion: "120,381,822 ETH"},
                       {nombre: "BNB", creacion: "2017", abreviatura: "BNB", circulacion: "155,862,165 BNB"},
                       {nombre: "XRP", creacion: "2012", abreviatura: "XRP", circulacion: "51,768,283,547 XRP"},
                       {nombre: "CARDANO", creacion: "2015", abreviatura: "ADA", circulacion: "34,814,134,119 ADA"},
                       {nombre: "DOGECOIN", creacion: "2018", abreviatura: "DOGE", circulacion: "139,194,476,384 DOGE"},
                       {nombre: "POLYGON", creacion: "2016", abreviatura: "MATIC", circulacion: "9,249,469,069 MATIC"},
                       {nombre: "SOLANA", creacion: "2019", abreviatura: "SOL", circulacion: "394,125,655 SOL"},
                       {nombre: "POLKADOT", creacion: "2015", abreviatura: "DOT", circulacion: "1,180,099,137 DOT"},
                       {nombre: "LITECOIN", creacion: "2011", abreviatura: "LTC", circulacion: "72,841,014 LTC"},
                       {nombre: "TRON", creacion: "2012", abreviatura: "TRX", circulacion: "90,583,548,766 TRX"},
                       {nombre: "SHIBA INU", creacion: "2020", abreviatura: "SHIB", circulacion: "589,542,157,859,369 SHIB"},
                       {nombre: "AVALANCHE", creacion: "2013", abreviatura: "AVAX", circulacion: "329,240,229 AVAX"},
                       {nombre: "CHAINLINK", creacion: "2017", abreviatura: "LINK", circulacion: "517,099,970 LINK"},
                       {nombre: "UNUS SED LEO", creacion: "2021", abreviatura: "LEO", circulacion: "930,481,350 LEO"},
                       {nombre: "COSMOS", creacion: "2011", abreviatura: "ATOM", circulacion: "286,370,297 ATOM"},
                       {nombre: "UNISWAP", creacion: "2016", abreviatura: "UNI", circulacion: "577,501,036 UNI"},
                       {nombre: "MONERO", creacion: "2014", abreviatura: "XMR", circulacion: "18,273,927 XMR"},
                       {nombre: "ETHEREUM CLASSIC", creacion: "2013", abreviatura: "ETC", circulacion: "140,751,925 ETC"},
                       {nombre: "TONCOIN", creacion: "2016", abreviatura: "TON", circulacion: "1,221,401,181 TON"}];

//VARIABLES Y CONSTANTES DEL SIMULADOR
const TASA_MENSUAL = 7.5;
let interes = 0;