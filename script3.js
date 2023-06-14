//VEDIAMO SE FUNZIONA
console.log('JS OK');

//CREO L'ARRAY DI BICICLETTE:
const biciclette = [
    {
        nome: 'Bici da città',
        peso: 200
    },
    {
        nome: 'Mountain bike',
        peso: 350
    },
    {
        nome: 'Bici da corsa',
        peso: 75
    },
    {
        nome: 'Bici ibrida',
        peso: 115
    },
    {
        nome: 'Bici pieghevole',
        peso: 120
    },
    {
        nome: 'Bici da cicloturismo',
        peso: 250
    },
]

//STAMPO IN CONSOLE L'ARRAY:
console.table(biciclette);

//CALCOLO LA BICICLETTA PIU' LEGGERA:
let biciLeggera = biciclette[0];

for (let i = 0; i < biciclette.length; i++) {

    let bici = biciclette[i];
    
    if (bici["peso"] < biciLeggera["peso"]) {
        biciLeggera = bici;
    }
}

//STAMPA IN CONSOLE:
console.log("La bici più leggera è: ", biciLeggera);
