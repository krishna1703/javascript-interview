//  singleton
// Singleton is an object literal with properties and methods. It can be accessed globally, ensuring that there's only one instance of this object.
//  Object.create methods use 

// object literals
//  this is object literals
const mysym = Symbol("key")
//  if you want to access the Symbol value 
//  then  key  = [mysym]

 const Jsobject = {
     name:"krishna",
     age: 22,
     email:"krishna@gmail.com",
     [mysym] :"key",
    
 }
//   behind  name = "name" in js 
//  console.log(Jsobject.age)
//  1 method

//  console.log(Jsobject["age"])
//  2 method

// console.log(Jsobject[mysym])

//   if you want to on change in your object then use freeze 
//  Object.freeze(Jsobject)
 Jsobject.age = 30;
//  console.log(Jsobject) 
 Jsobject.greeting = function(){
    console.log(`hiii , ${this.age} , ${this.name}`)
 }


 console.log(Jsobject.greeting())