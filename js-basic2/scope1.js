// // // ************ nested scope **************

// //  function parent(){
// //      let name= "krishna ";

// //      function child(){
// //         let Name = "vivek";
// //         console.log( " parent variable calls",name);
// //      }
// //     //  console.log(Name);

// //      child()

// //     }
// //     parent()

// //     //  closure
// //     // In JavaScript, a closure is a powerful feature that allows a function to access variables from an outer function’s scope even after the outer function has returned. This is possible because of JavaScript's lexical scoping and the way functions are treated as first-class citizens.

// //      if(true){

// //          let b=  "kkkk";
// //          if(true){
// //             console.log(b);
// //             let c= "krishna";

// //          }


// //         }


// // *********** intresting ********************

// //  normal function 

// //  funtion c(){
// //  normal funtions
// //  }

// //  expression function

// //  const a =  function(num){
// //     return num +1 ;
// //  }
// //  a(5)


//  console.log(c(54))

//  function c(num){
//  return num +2 ;
//  }
// // 56 output

// // a(5)

// // Cannot access 'a' before initialization  [error]
//   const a =  function(num){
//     return num +1 ;
//  }
// //  now  hoisting  comes into the picture

//   console.log(a(5))
// //   6 output
