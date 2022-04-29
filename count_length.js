// var a=require("readline-sync")
// var str=a.question("enter the str")
// i=0
// while (i<str.length){
//     i++
// }
// console.log(str.length)

// var a=require("readline-sync")
// var str=a.question("enter the str")
// i=0
// while (i<str.length){
//     i++
// }
// if (str.length<5){
//     console.log(str.length+"length is less than 5")
// }
// else{
//     console.log(str.length+"length is greter than 5")    
// }


var a=[1,2,1,4,1,1,2,5,6,3,6,2,6,7,2,3,4,2,3,11,11,11];
i=0
while (i<a.length){
    var count=0
    var j=0
    while (j<a.length){
        if(a[i] === a[j]){
            count++
        }
        j++
    }
    if (count==3){
        console.log(a[i],count)
    }

    i++
    
}





// for (var a=1;a<=10;a++){
//     if (a==3 || a==4 || a==6){
//         continue
//     }
//     else{
//     }
//     console.log(a)
// }



