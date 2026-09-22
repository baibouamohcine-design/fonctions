const prompt = require("prompt-sync")();
const a = Number(prompt("entré la premiére nombre pour affichrer la miniumun nombre : "))
const b = Number(prompt(" entré la deuxiéme nombre pour  afficher la minumun nombre entre les deux  : "))
function miniumun(min){
    let c = 0
    if(a>b){
        return c = b
    }else if (b>a){
        return c = a 
    }
}
let laMinumun = miniumun(a,b)
console.log(`la minimun nombre entre les deux est : ${laMinumun}`);
