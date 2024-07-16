//  for each loop , map , reduce and filter 

// for each loop


// The forEach loop is a method available for arrays in JavaScript. It executes a provided function once for each array element.
//   for each koi return array ni krta hai

 const arr1 = [1,2,3,4,5,6,7,8,9,10]
  arr1.forEach((number , index)=> 
 console.log(`arr1 values : ${number}  , index of ${index}`)
)

//  filter method

// The filter method creates a new array with all elements that pass the test implemented by the provided function. It doesn't change the original array but returns a new array.// 




const arr2 = [1,2,3,4,5,6,7,8,9,10]

 const  Array  = arr2.filter((num)=> num > 5)

// console.log(Array)

//   filter callback function and condition ture hogi to vo return a new array

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 15 }
  ];
  
  const adults = people.filter(person => person.age >= 18);
  
//   console.log(adults);
  // Output: [
  //   { name: 'Alice', age: 25 },
  //   { name: 'Bob', age: 20 },
  //   { name: 'Charlie', age: 30 }
  // ]
  
//   map  methods
// map: Creates a new array with the results of calling a provided function on every element in the calling array.

let array = [1,2,3,4,5,6,7,8,9,10] 
let result  =  array.map((item )=>  item * 2  )
console.log(array)
console.log("result",result)

// reduce 

// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It is useful for aggregating values in an array.


let array1 = [1,2,3,4,5,6,7,8,9,10] ;

 let intialValue  = 0;

let res = array1.reduce((acc , currval)=> acc + currval , intialValue )

//  console.log(res);

//  find max value 

let res1 = array1.reduce((acc , currval)=>  (currval > acc) ?currval :acc , intialValue )

 console.log(res1);
 