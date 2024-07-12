//  Immediately Invoked Function Expressions (IIFE) (invoked function in js )

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 

// (function () {
//     // … named iiff
//   })();
  
//   (() => {
//     // … simple iiff
//   })();
  
//   (async () => {
//     // …
//   })();
  

//   simple hai 
// ()()
// (function ko raip kro )  ( then execute kro ) or ; function ko end (;) kro nahi to error aayega 

// Avoid polluting the global namespace

 (function onefun(){
  console.log("db connected")
 }) ();
//  function ko call kro or ; end bhi kro 
 ( () =>{
    console.log("db connected")
   }) ();

//    Avoiding Global Namespace Pollution: IIFE ko use karke aap global variables ko avoid karte hain jo large codebases mein conflicts aur bugs cause kar sakte hain