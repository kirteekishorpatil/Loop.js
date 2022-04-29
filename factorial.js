var redline=require("readline-sync")
var number=redline.questionInt("enter the number")
var i=1
var fact=1
while (i<=number){
    fact=fact*i
    i++
}
console.log(fact)