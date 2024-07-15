// //  foor loop 

//  for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is the best number")
//     }
//     console.log(element)
//  }
// //  


// for(let i = 0; i<= 10 ; i++ ){
//     console.log(`outer loop ${i}`)
//     for(let j = 0; j <=5 ; j++){
//         console.log(`inner loop value ${j}`)
//     }
// }

// //  break and continue


// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is the best number")
//         break;
//     }
//     console.log(element)
//  }

//   if we use break  key word then loop break and end  looping 
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is the best number")
//         continue;
//     }
//     console.log(element)
//  }

//  continue condition true kr ke aage number print krta  hai but loop ko end ni krta hai  but jis condition ke liye lga hai usko skip kr deta hai ye continue key word

// do while loop  and while loop


// while loop

 let num = 0 ;
 while (num <= 10){
    console.log(`value of num ${num}`)
    num = num +2
 }

//  do while loop

 let n = 11 
do {
    console.log(`n is ${n}`)
    n++
} while (n<=10);