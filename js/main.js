// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

let studente = {
    nome : 'Elena',
    cognome : 'Marangoni',
    eta : 35
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (let chiave in studente) {
        console.log(chiave + ' : ' + studente[chiave]);
    }
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.