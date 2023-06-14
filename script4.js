//VEDIAMO SE FUNZIONA
console.log('JS OK');

//CREO L'ARRAY DI SQUADRE DI CALCIO:
const campionato =
[
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

//STAMPO IN CONSOLE:
console.table(campionato);

// VOGLIO UN ARRAY CON SOLO NOMI E FALLI:
const ArrayNomiFalli = campionato.map((squadra) => {
    return {
      nome: squadra.nome,
      falli: squadra.falli,
    }
});

//STAMPO IN CONSOLE LE SQUADRE CON NOMI E FALLI:
console.log(ArrayNomiFalli);