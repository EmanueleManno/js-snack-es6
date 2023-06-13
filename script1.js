//VEDO SE FUNZIONA:
console.log('JS OK');

//CREAZIONE DELL'ARRAY DEGLI INVITATI:
const invitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

//STAMPA DEGLI INVITATI
for (let i = 0; i < invitati.length; i++) {
    const invitato = invitati[i];
    console.log(invitato);
}

//IMPOSTO IL NOME DEL TAVOLO:
const nomeTavolo = 'Tavolo Vip';

//CREAZIONE DELL'ARRAY DEGLI INVITATI:
const invitatiConTavolo = [ 
    {
        nome: 'Brad Pitt',
        tavolo: (nomeTavolo),
    }, 
    {
        nome: 'Johnny Depp',
        tavolo: (nomeTavolo),
    },
    {
        nome: 'Lady Gaga',
        tavolo: (nomeTavolo),
    },
    {
        nome: 'Cristiano Ronaldo',
        tavolo: (nomeTavolo),
    },
    {
        nome: 'Georgina Rodriguez',
        tavolo: (nomeTavolo),
    },
    {
        nome: 'Chiara Ferragni',
        tavolo: (nomeTavolo),
    },
    {
        nome: 'Fedez',
        tavolo: (nomeTavolo),
    },
    {
        nome: 'George Clooney',
        tavolo: (nomeTavolo),
    },
    {
        nome: 'Amal Clooney',
        tavolo: (nomeTavolo),
    },
    {
        nome: 'Maneskin',
        tavolo: (nomeTavolo),
    }
];

//STAMPO IN CONSOLE LA LISTA DEGLI INVITATI COL TAVOLO:
console.table(invitatiConTavolo);