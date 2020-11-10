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



// Scorro tutte le icone per trovare l'elemento corrente
icons.forEach((icona_corrente, index) => {
    console.log(icona_corrente,)
    // destrutturo l'elemento corrente (icona_corrente) per ricavarmi le caratteristiche che mi servono
    const {name, prefix, family} = icona_corrente;

    // stampo in pagina le icone con il nome
    $("#icons-container").append(`
            <i class="${family} ${prefix}${name}"</i>
            <p>${name}</p>
    `);


});

// Definisco una variabile colors che mi servirà per inglobare le icone suddivise per tipo
    const colors= ["blue", "red", "orange"];
    console.log(colors);
    const icon_types = [];
    // console.log(icon_types)

// Scorro le icone e individuo solo il valore tipo
icons.forEach((icona_corrente,) => {
    console.log(`${icona_corrente.type}
    `);
// // Creo la variabile tipo
    const {type} = icona_corrente;
    // console.log(icona_corrente);
// scorro le icone una alla volta, se il tipo non è inserito nell'array lo inserisco, se no vado avanti
    if(!icon_types.includes(type)) {
    // (`${icona_corrente.type[programs]}.addClass('red')`);
           icon_types.push(type);
       }


// recupero l'indice dell'array colori e l'indice dell'array tipi
 const type_index = icon_types.indexOf(type);
 const icon_color = colors[type_index];
// scorro tutti i tipi
console.log(icon_color);
// $('#icons-container').addClass('red');
});

// svuoto il container
$('#icons-container').empty();
//
// stampo tutte le icone
print_all_icons(icons);

function print_all_icons(icons_array) {
    icons_array.forEach((icona_corrente) => {
        print_icon(icona_corrente);
    });
}

function print_icon(icon_object) {

    // recupero le chiavi name, prefix, family e type
    const {name, prefix, family, type} = icon_object;
    // recupero il colore corrispondere al tipo
    // recupero l'indice del tipo dell'icona all'interno dell'array dei tipi
    const type_index = icon_types.indexOf(type);

    // recupero il colore corrispondente al tipo dell'icona corrente
    const icon_color = colors[type_index];
    // console.log(icon_color);

    // appendo il tag <i> per l'icona corrente
    $('#icons-container').append(`
            <i class="${family} ${prefix}${name} fa-2x" style="color:${icon_color}"></i>
            <p>${name}</p>
    `);
}


// Scorro le icone per filtrarle in base al tipo call'interno della select

icon_types.forEach((type) => {
    $('#icons-filter').append(`
        <option value="${type}">${type}</option>
    `);
});
// intercetto l'icona selezionata
$('#icons-filter').change(() => {
    // recupero il tipo selezionato dall'utente
    const selected_type = $('#icons-filter').val();
    console.log(selected_type);

    // svuoto la pagina
    $('#icons-container').empty();

    // verifico la sceòlta dell'utente
    if(selected_type != '') {
        // recupero le icone corrispondeti al tipo scelto dall'utente
        const chosen_icons = icons.filter((icon) => {
            return selected_type == icon.type;
        });
        // stampo le icone corrispondenti in base alla scelta dall'utente
        chosen_icons.forEach((icon) => {
            print_icon(icon);
        });
    } else {
        // se l'utente clicca su all types, allora le visualizzo tutte
        print_all_icons(icons);
    }

});
