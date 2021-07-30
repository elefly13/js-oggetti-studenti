// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

let studente = {
    nome : 'Elena',
    cognome : 'Marangoni',
    eta : 53
}
console.log(studente);
 

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (let key in studente) {
        
        //inserisco gli elementi in una lista in html
        let templateRiga = document.createElement('li');
        templateRiga.classList.add("lista");
        templateRiga.innerHTML = key + ': ' + studente[key];
        document.getElementById('studente').appendChild(templateRiga);
    }
// Creare un array di oggetti di studenti.
let classeStudenti = [ 
    {
        nome : 'Anna',
        cognome : 'Rossi',
        eta : 15
    }, 
    {
        nome : 'Luigi',
        cognome : 'Verdi',
        eta : 15
    }, 
    {
        nome : 'Alba',
        cognome : 'Neri',
        eta : 15
    }, 
    {
        nome : 'Sara',
        cognome : 'Bianchi',
        eta : 15
    }, 
    {
        nome : 'Marco',
        cognome : 'Gialli',
        eta : 15
    }
];
// // Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
let newStudente = {
    nome : prompt('Inserisci il tuo nome'),
    cognome: prompt('Inserisci il tuo cognome'),
    eta: parseInt(prompt('Inserisci i tuoi anni')),
}
classeStudenti.push(newStudente);
console.log(classeStudenti);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (let i = 0; i < classeStudenti.length; i++) {
    console.log(classeStudenti[i])
    let classe = classeStudenti[i];
    
    console.log(classe['nome'] + ' ' + classe['cognome']);

    //inserisco gli elementi in una lista in html
    let templateRiga = document.createElement('li');
    templateRiga.classList.add("lista");
    templateRiga.innerHTML = classe['nome'] + ' ' + classe['cognome'];
    document.getElementById('elenco').appendChild(templateRiga);

    

};



