// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

//  const arr = ["hii" ,1,true,null,undefined]
//  storing a collection of multiple items under a single variable name.
//  console.log(arr)

//   const arr = new Array(1,2,3,4,5)
//   console.log(arr1)
//   console.log(arr1[2])
 const  Arr = [1,2,3,4,5,6]
//  console.log(Arr)
 Arr.push(10)
 Arr.push(11)
 Arr.push(12)
 Arr.pop()
//   push methods  value ko last me add krta hai  in array 
//   pop methods  last value ko remove krta hai in array 
 Arr.unshift(-1)
//  console.log(Arr)
 Arr.shift()
//   unshift methods me  value ko start me add krta hai but all array element ko apni index se shift krta hai ;
//   shift  methods me  start ki value ko remove krta hai .
//  console.log(Arr)


//  console.log(Arr.includes(8))
//   if value match  in the given array then return ture ontherwise false
// console.log(Arr.indexOf(5))
//  index ki value dete hai   0 se start hoti hai index number ;

// console.log( typeof Arr)
// object
// console.log( typeof Arr.join())
// string
//  join method krta hai ki array ko string data type me convert krta hai ;

// ************slice************

 console.log( "A  ",Arr)
const l1 = Arr.slice(1,3)
// 1,3 is range okk 1 is staring range and 3 is last range 
 console.log(l1);
 console.log( "B ",Arr);

//  [ 2, 3 ]
// B  [1, 2,  3,  4,  5, 6, 10, 11]


 const L2 = Arr.splice(1,3);

//  c   [ 1, 5, 6, 10, 11 ]
//  [ 2, 3, 4 ]
 console.log("c  " , Arr);
 console.log(L2);

//    slice methods last range ko include ni krta hai ko  original array me change ni krta hai ;

//    splice methods last range ko include krta hai or original array ko bhi change krtau hai ;