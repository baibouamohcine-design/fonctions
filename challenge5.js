const prompt= require("prompt-sync")();
const ask = Number(prompt("entre une nombre :  "))

function factoreil(ask){
let factoreile  = 1
for(let i = 1 ;i<= ask ; i++){
 factoreile*= i
}
 return factoreile 
}
let resultat = factoreil(ask)
console.log (`la factoreile de la nombre  ${ask} est : ${resultat}`)