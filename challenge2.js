const prompt = require("prompt-sync")();
const a = Number(prompt("entre  a nombre  pour calcule la multiplication: "))
const b = Number(prompt("entre  a nombre  pour calcule la multiplication : "))
function multiplication(a,b){
    return a*b
}
let resultat = multiplication(a,b)
console.log(`la multiplication pour les deux nummbres ${a} x ${b} = ${resultat}`)