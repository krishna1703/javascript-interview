// ********** this key word ********
//  this key word current context ko refer krta hai  means current variable ki bat 
//   this ki value node js me environment  {} empty object aati hai  or browser me window object ko refer krta hai 

//  const user ={
//     name :"krishna",
//     age :22,
//     welcomemessage : function(){
//          console.log(`${this.name} ,  welcome bhai `)
//          console.log(this)


//    }
//  }

//   user.welcomemessage();
//   // krishna ,  welcome bhai 
//   user.name = "harsh";
// // harsh ,  welcome bhai 
// user.welcomemessage();
 
// console.log(this)
// {} outer this  funtion ke bahar node me okk 

//  inner this         

//  krishna ,  welcome bhai 
// {
//   name: 'krishna',
//   age: 22,
//   welcomemessage: [Function: welcomemessage]
// }

//  function  dost(){
// let  student = "krishna"


//     console.log( this.student,"hiii this methods ")
// // undefined hiii this methods  this key word ko  object  me  refrense kiya ja skta hai bs 

//  }

//  dost();
//  Object [global] bhut sara output aayega 

//   let talk about fat arrow function 

//  const Fun = ()=>{
//      let student  = "sohit";
//      console.log(this.student);
//       //  undefined
//      console.log(this)
//       //   {}
//  }

//  Fun()


//  one way to write arrow fun 

//  const Fun = (a,b)=>{
//   return a+b;
// }

// console.log(Fun(5,5));

//two way write arrow fun

// const Fun = (a,b)=>   a+b;

// console.log(Fun(5,5));
  
//  three way write arrow fun

// const Fun = (a,b)=>   (a+b);

// console.log(Fun(5,5));

//  if i want to object in fat arrow fun without {} and return then 

const Fun = (a,b)=> ({username:"krishna"})
// { username: 'krishna' } output
  console.log(Fun(5,5));