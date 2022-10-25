"use strict"
// array iniziale
const listEmail = ["Pino@gmail.com", "Gino@gmail.com", "Tino@gmail.com", "Lino@gmail.com", "Dino@gmail.com", "Mino@gmail.com"]

// prompt per inserire la mail
const newElement = prompt ("inserisci l'email:");

let trovato = false;
// ciclo for
for(let i = 0; i < listEmail.length; i++){
    let name = listEmail[i];

    // se uno degli elementi è uguale a newElement ...
    if (name == newElement){
        trovato = true;
    }
    // altrimenti ...
    else{
        
    }
}