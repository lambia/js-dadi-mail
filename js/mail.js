const listaUtenti = ["luca@mail.it", "fra@mail.it", "marco@mail.it", "lore@mail.it", "pasquale@mail.it"];

const mailUtente = prompt("Inserisci la tua mail");

let autorizzato = false;

// alternativa al ciclo for
// autorizzato = listaUtenti.includes(mailUtente);

for (let i = 0; i < listaUtenti.length; i++) {
    
    const element = listaUtenti[i];

    // console.log( element, i );
    
    if(element == mailUtente) {
        autorizzato = true;
        break;
    }
    
    // console.log(autorizzato, i);
}

let nomeUtente = "";
for (let i = 0; i < mailUtente.length; i++) {
    const carattere = mailUtente[i];

    if(carattere=="@") {
        break;
    }
    nomeUtente += carattere;
}

//Alternativa con indexOf e substring
// const posizioneChiocciola = mailUtente.indexOf("@");
// nomeUtente = mailUtente.substring(0, posizioneChiocciola);

if(autorizzato) {
    alert("Benvenuto, " + nomeUtente);
} else {
    alert("Non sei autorizzato, vai via!");
}

