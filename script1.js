//VEDO SE FUNZIONA:
console.log('JS OK');

//IMPOSTO IL NOME DEL TAVOLO:
const nomeTavolo = 'Tavolo Vip';

//IMPOSTO IL NUMERO DEL SEGNAPOSTO A ZERO:
let numeroSegnaposto = 0;

//CREAZIONE DELL'ARRAY DEGLI INVITATI COL TAVOLO E IL SEGNAPOSTO:
const invitatiConTavolo = [ 
    {
        nome: 'Brad Pitt',
        tavolo: (nomeTavolo),
        segnaposto: numeroSegnaposto,
    }, 
    {
        nome: 'Johnny Depp',
        tavolo: (nomeTavolo),
        segnaposto: numeroSegnaposto,
    },
    {
        nome: 'Lady Gaga',
        tavolo: (nomeTavolo),
        segnaposto: numeroSegnaposto,
    },
    {
        nome: 'Cristiano Ronaldo',
        tavolo: (nomeTavolo),
        segnaposto: numeroSegnaposto,
    },
    {
        nome: 'Georgina Rodriguez',
        tavolo: (nomeTavolo),
        segnaposto: numeroSegnaposto,
    },
    {
        nome: 'Chiara Ferragni',
        tavolo: (nomeTavolo),
        segnaposto: numeroSegnaposto,
    },
    {
        nome: 'Fedez',
        tavolo: (nomeTavolo),
        segnaposto: numeroSegnaposto,
    },
    {
        nome: 'George Clooney',
        tavolo: (nomeTavolo),
        segnaposto: numeroSegnaposto,
    },
    {
        nome: 'Amal Clooney',
        tavolo: (nomeTavolo),
        segnaposto: numeroSegnaposto,
    },
    {
        nome: 'Maneskin',
        tavolo: (nomeTavolo),
        segnaposto: numeroSegnaposto,
    }
];

//CALCOLO IL SEGNAPOSTO:
invitatiConTavolo.forEach(element => {
    numeroSegnaposto = invitatiConTavolo.indexOf(element) + 1
    element.segnaposto = numeroSegnaposto;
    console.log(element)
})

//STAMPO IN CONSOLE LA LISTA DEGLI INVITATI COL TAVOLO E IL SEGNAPOSTO:
console.table(invitatiConTavolo);