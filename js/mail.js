const listaUtenti = ["luca@mail.it", "fra@mail.it", "marco@mail.it", "lore@mail.it", "pasquale@mail.it"];

const mailUtente = prompt("Inserisci la tua mail");

// console.log(mailUtente);

let mailTrovata = false;

for (let i = 0; i < listaUtenti.length; i++) {
    
    const element = listaUtenti[i];

    console.log( element, i );
    
    if(element == mailUtente) {
        mailTrovata = true;
        break;
    }
    
    // console.log(mailTrovata, i);
}

if(mailTrovata) {
    alert("Benvenuto, " + mailUtente);
} else {
    alert("Non sei autorizzato, vai via!");
}

