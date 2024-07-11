// ***************scope****************

// let a = 10;
// const b = 20;
// var c = 30;

//  console.log(a)
//  console.log(b)
// console.log(c)
// 10
// 20
// 30
 var c = 200;
 let a =10
 const b = 2000;

 if(true){
    let a = 1021;
    console.log("inner :",a)
    const b = 20;
    console.log("inner :",b)
    var c = 30;
    console.log( "inner :", c)
 }
 console.log("outer let",a)
 console.log("outer const ",b)
 console.log("outer var",c)
//  30  to var  is not so good  for asign a veriable 
// inner : 30 override value
// 30

// inner : 1021
// inner : 20
// inner : 30
// outer let 10
// outer const  2000
// outer var 30


//   global scope

// {
//     block scope 
// }