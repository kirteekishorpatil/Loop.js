// var a=require("readline-sync")
// var number=a.questionInt("enter the number do you want")
// var n=number
// var sum=0;
// while (number>0){
//     var rem=number%10;
//     sum=sum+rem;
//     number=Math.floor(number/10);
// }
// if (n%sum==0){
//     console.log(String(n)+"it is harshad number")
// }
// else{
//     console.log(String(n)+"it is not harshd number")
// }

var a=require("readline-sync")
var number=a.questionInt("enter the number do you want")
var n=number
var sum=0;
while (number>0){
    var rem=number%10;
    sum=sum+rem;
if (n%sum==0){
    console.log(String(n)+"it is strong number")
}
else{
    console.log(String(n)+"it is not strong number")
}
}