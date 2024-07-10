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

//  console.log(Jsobject.greeting())


 const x= {}

  x.id = "1212";
  x.name = "krishna";
  x.age=22;

console.log(x)

const y = {
    email :"krishna@gmail.com",
    fullname:{
        username:{
            name:"kk",
            age:"55"
        }
    }
}
 console.log(y.fullname.username.name)
//  nested object 
 const N = {a:1,b:2}
 const M = {c:3,d:4}
  const K = {...N,...M}
  // { a: 1, b: 2, c: 3, d: 4 }

//    object join (...) using  1 methods
//  object.assign  (target {} and source M,N)            2 methods

// { a: 1, b: 2, c: 3, d: 4 }
 const K1 = Object.assign ({},N,M)
   console.log(K)
   console.log(K1)

    console.log(Object.keys(N));
    // Returns the names of the enumerable string properties and methods of an object.

    console.log(Object.values(M));
    // Returns an array of values of the enumerable properties of an object.

    //   keys and values get krna 

    console.log(Object.entries(M));
// Returns an array of key/values of the enumerable properties of an object 

console.log(M.hasOwnProperty("c"))
//  const M = {c:3,d:4}
// Determines whether an object has a property with the specified name.
//   object me  property find krna 
// true 