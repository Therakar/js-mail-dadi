"use strict"
// array iniziale
const listEmail = ["Pino@gmail.com", "Gino@gmail.com", "Tino@gmail.com", "Lino@gmail.com", "Dino@gmail.com", "Mino@gmail.com"]

// prompt per inserire la mail
const newElement = prompt ("inserisci l'email:");

// imposto una variabile sentinella 
let trovato = false;
// ciclo for
for(let i = 0; i < listEmail.length; i++){
    let name = listEmail[i];

    // se uno degli elementi è uguale a newElement la variabile sentinella viene cambiata di valore 
    if (name == newElement){
        trovato = true;
    }
}

// se la variabile sentinella viene cambiata di valore allora viene stampato l'avviso che la mail esiste già
if (trovato === true){
    alert("L'email esiste già!");
} 
// se la variabile sentinella NON viene cambiata di valore allora viene stampato l'avviso che la mail è valida
else if (trovato === false) {
    alert("L'email è valida!")
}