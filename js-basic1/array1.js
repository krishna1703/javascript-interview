
  // const  arr = [10,11,12,13,14,15]
  // const arr1 = [1,2,3,4,5,]

    // arr1.push(arr)
    // console.log(arr1)
    //  push  [..... ,[]] but this is not good 
    // Appends new elements to the end of an array, and returns the new length of the array. same array me add krta hai 

// const value =  arr1.concat(arr);
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(value);
//  This method returns a new array without modifying any existing arrays.
// Combines two or more arrays. that's why this is not good  pratice

//  const val = [...arr1,...arr]
//  console.log(val)

// The spread operator in JavaScript is a convenient way to expand an iterable (like an array or a string) or an object into individual elements. It's denoted by three dots (...).

// You can concatenate multiple arrays. 

// The spread operator is a powerful tool that can simplify working with arrays and objects, making your code more readable and concise.

//  const a = [1,2,3,[4,5,[6,7,[55]]]]
//   const an  = a.flat(Infinity)
  //  console.log(an)
  // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  // console.log(Array.isArray([1,2,3]))  
  //  check is array or not ? then result  false y true

//  console.log(Array.from("krishna"))
//   from use krege to array ctreate hoga okk 


// console.log(Array.from({name:"krishna"}))
// The Array.from() method is typically used to create a new, shallow-copied array instance from an array-like or iterable object
//  [] ans 
// Object.entries() to create an array from an object: key ke accor.
// If you want to convert just the values of the object into an array, you can use Object.values(

//  const obj = {name:"krishna"}
//  const Arrrr = Object.entries(obj)
//  [ [ 'name', 'krishna' ] ]


//  console.log(Arrrr)
//  const Arrrr1 = Object.values(obj)
// [ 'krishna' ]
//  console.log(Arrrr1)

//  let s1 = 200;
//  let s2 = 300;
//  let s3 = 400;

//  Returns a new array from a set of elements.
  // console.log(Array.of(s1,s2,s3))
  // [ 200, 300, 400 ]