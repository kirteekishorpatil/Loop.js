// var i=1;
// var string="";
// while (i<=6){
//     j=1
//     while (j<=i){
//         string=string+"* ";
//         j++
//     }
//     i++
//     string=string+"\n";
// }
// console.log(string) 


let n=6;
var string="";
for (let i=1; i<=n; i++){
    for (j=1; j<=n-i; j++){
        string=string+" ";
    }
    for (k=0; k<i-1; k++){
        string=string+" * "
    }
    string=string+"\n"
}
console.log(string)

 


