//VEDO SE FUNZIONA:
console.log('JS OK');

//CREAZIONE DELL'ARRAY DEGLI STUDENTI:
const students = [
    {
        id: 213,
        name: "Marco della Rovere",
        grade: 78
    },

    {
        id: 110,
        name: "Paola Cortellessa",
        grade: 96
    },

    {
        id: 250,
        name: "Andrea Mantegna",
        grade: 48
    },

    {
        id: 145,
        name: "Gaia Borromini",
        grade: 74
    },

    {
        id: 196,
        name: "Luigi Grimaldello",
        grade: 68
    },

    {
        id: 102,
        name: "Piero della Francesca",
        grade: 50
    },

    {
        id: 120,
        name: "Francesca da Polenta",
        grade: 84
    }
]

//STAMPA IN CONSOLE:
console.log(students);

//CREO LA LISTA DEGLI STUDENTI CON VOTAZIONE MAGGIORE DI 70:
const studentiBravi = students.filter((item) => {
    return item.grade > 70
})

//STAMPA IN CONSOLE:
console.log(studentiBravi);

//VOTAZIONE MAGGIORE DI 70 E ID MAGGIORE DI 120:
const studentiBraviConId = students.filter((item) => {
    return item.grade > 70 && item.id > 120
})

//STAMPA IN CONSOLE:
console.log(studentiBraviConId);

//CREO LA LISTA IN MAIUSCOLO:
const listaMaiscola = students.map((item) => {
    return item.name.toUpperCase()
});

//STAMPO IN CONSOLE:
console.log(listaMaiscola);