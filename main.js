// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.

// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.

// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.



// Definisco un array di oggetti rappresentati da un'icona con le seguenti caratteristiche: nome, prefisso, tipo e famiglia.

const icons = [
    {
           'name': 'skype',
           'prefix': 'fa-',
           'type': 'programs',
           'family': 'fab'
       },
       {
           'name': 'twitter',
           'prefix': 'fa-',
           'type': 'programs',
           'family': 'fab'
       },
       {
           'name': 'instagram',
           'prefix': 'fa-',
           'type': 'programs',
           'family': 'fab'
       },
       {
           'name': 'pizza-slice',
           'prefix': 'fa-',
           'type': 'food',
           'family': 'fas'
       },
       {
           'name': 'ice-cream',
           'prefix': 'fa-',
           'type': 'food',
           'family': 'fas'
       },
       {
           'name': 'pepper-hot',
           'prefix': 'fa-',
           'type': 'food',
           'family': 'fas'
       },
       {
           'name': 'fish',
           'prefix': 'fa-',
           'type': 'summer',
           'family': 'fas'
       },
       {
           'name': 'water',
           'prefix': 'fa-',
           'type': 'summer',
           'family': 'fas'
       },
]


// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.
// const {type} = icons;
// console.log(type)

//     const colors= ["blue", "red", "orange"];
// Scorro tutte le icone per trovare l'elemento corrente
icons.forEach((icona_corrente) => {
    // console.log(icon)
    // destrutturo l'elemento corrente (icona_corrente) per ricavarmi le caratteristiche che mi servono
    const {name, prefix, family} = icona_corrente;

    // stampo in pagina le icone con il nome
    $("#icons-container").append(`
            <i class="${family} ${prefix}${name}"</i>
            <p>${name}</p>
    `);


});

// Definisco una variabile colors che mi servirà per suddividere le icone per tipo
    const colors= ["blue", "red", "orange"];

icons.forEach((icona_corrente) => {
console.log(`${icona_corrente.type}
    `);

});


// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.