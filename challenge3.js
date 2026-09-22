const prompt=require("prompt-sync")();
const nb1 = Number(prompt("entré la premiére nombre pour  retourne le plus grand : "))
const nb2 = Number(prompt("entré la deuxiéme nombre pour  retourne le plus grand :"))


function maxumun(max){
    let maxi = 0
 if(nb1>nb2){
   return maxi=nb1
 }else if(nb1<nb2){
    return maxi=nb2
 }
}
 let laplusgrand = maxumun(nb1,nb2)
console.log(`la plus grand est : ${laplusgrand}`)