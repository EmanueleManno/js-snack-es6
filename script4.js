//VEDIAMO SE FUNZIONA
console.log('JS OK');

//RECUPERO L'ELEMENTO DAL DOM:
const squadrette = document.getElementById('squadre');

//CREO L'ARRAY DI SQUADRE DI CALCIO:
const campionato = [
{ 
    nome: 'Milan',
    punti : 0,
    falli : 0
},
{
    nome: 'Juventus',
    punti : 0,
    falli : 0
},
{
    nome : 'Napoli',
    punti : 0,
    falli : 0
 },
 {
    nome : 'Inter',
    punti : 0,
    falli : 0
 },
 {
    nome : 'Roma',
    punti : 0,
    falli : 0
},
{
    nome: 'Lazio',
    punti : 0,
    falli : 0
},
{
    nome : 'Torino',
    punti : 0,
    falli : 0
},
{
    nome : 'Hellas Verona',
    punti : 0,
    falli : 0
 },
 {
    nome : 'Monza',
    punti : 0,
    falli : 0
},
{
    nome: 'Real Madrid',
    punti : 0,
    falli : 0
},
{
    nome : 'Liverpool',
    punti : 0,
    falli : 0
}
]

//CREO UN NUOVO ARRAY VUOTO:
const arrayNomiFalli = [];

//PER OGNI SQUADRA CONTENENTE NEL CAMPIONATO:
for (let i = 0; i < campionato.length; i++) {

    //GENERO UN NUMERO CASUALE PER I PUNTI:
    campionato[i]["punti"] = Math.floor((Math.random() * 100) + 1);
    //GENERO UN NUMERO CASUALE PER I FALLI:
    campionato[i]["falli"] = Math.floor((Math.random() * 100) + 1);

    //MI PRENDO NOME E FALLI PER METTERLI NEL NUOVO ARRAY:
    let {nome, falli} = campionato[i];
    //PUSHO NEL NUOVO ARRAY GENERATO:
    arrayNomiFalli.push({nome, falli});
}

//STAMPO IN CONSOLE TUTTO L'ARRAY CON NOMI, SQUADRE E FALLI:
console.table(campionato);

//STAMPO IN CONSOLE SOLO NOMI E FALLI:
console.table(arrayNomiFalli);

//STAMPA IN PAGINA:
for (let i=0; i < arrayNomiFalli.length; i++) {
squadrette.innerHTML += `Squadra : ${arrayNomiFalli[i].nome} con Falli: ${arrayNomiFalli[i].falli} <br>`
};
