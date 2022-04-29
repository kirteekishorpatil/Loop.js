// var i=0;
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

// var i=0;
// var string="";
// while (i<4){
//     j=1
//     while (j<=4){
//         string=string+1;
//         j++
//     }
//     i++
//     string=string+"\n";
// }
// console.log(string) 

// var i=0;
// var string="";
// while (i<4){
//     j=1
//     while (j<=4){
//         string=string+j;
//         j++
//     }
//     i++
//     string=string+"\n";
// }
// console.log(string) 


// var i=1;
// var string="";
// while (i<=4){
//     j=1
//     while (j<=4){
//         string=string+j;
//         j++
//     }
//     i++
//     string=string+"\n";
// }
// console.log(string) 


var i=0;
var string="";
while (i<=6){
    j=1
    while (j<=6-i){
        string=string+" ";
        j++
        k=0
        while (k<=j){
            string=string+"* "
            k++
        }
        j++
        // i++
        // string=string+"\n";
    }
    i++
    string=string+"\n";

}
console.log(string)






// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[0];
// console.log(fruit)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1];
// console.log(fruit)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;
// console.log(fLen)

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Lemon");
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple"];
// fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits 
// console.log(fruits)