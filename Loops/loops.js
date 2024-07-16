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

let num = 0;
while (num <= 10) {
  console.log(`value of num ${num}`);
  num = num + 2;
}

//  do while loop

let n = 11;
do {
  // console.log(`n is ${n}`)
  n++;
} while (n <= 10);

// for in loop  and for of loop

// for of loop

// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
const arr = [1, 2, 3, 4, 5];

for (const item of arr) {
  console.log(item);
}
// 1
// 2
// 3
// 4
// 5

const iterable = "boo";

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"

// for in

// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

const object = {
  a: 1,
  b: 2,
  c: 3,
};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"

// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It iterates over the values of the iterable object.

// The for...in loop is used to iterate over the enumerable properties of an object. It iterates over the keys (property names) of the object.

// diffrence 
// Use for...of for arrays and other iterable objects, and
//  for...in for objects with properties.