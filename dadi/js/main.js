"use strict"

let numberUser = Math.floor(Math.random() * 6) +1;
let numberIA = Math.floor(Math.random() * 6 ) +1;

console.log(`Hai fatto: ${numberUser} `);
console.log(`IA ha fatto: ${numberIA}`);

if (numberUser < numberIA){
    console.log("HAI PERSO!");
} else if(numberUser > numberIA){
    console.log("HAI VINTO!");
} else if (numberUser == numberIA){
    console.log("PAREGGIO!");
}