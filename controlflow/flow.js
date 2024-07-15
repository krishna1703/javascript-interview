// < ,> <=,>=,  for condition check 

// if(true){
// }

// if  statement

 let userlogedin  =  true;
 if (userlogedin){
    console.log("user log in ")
 }
let score  = 150;

// if else statement 
if(score <= 100){
console.log("score is leass then and equal to 100")
}
else if(score >=300){
   console.log("score is grater then and equal to 300")

}
else{
   console.log("score not matched your gviven value ")
}

// switch

// switch (key) {
//    case value:
      
//       break;

//    default:
//       break;
// }
 let matchscore = 100;
 switch(matchscore){
   case 50:
console.log("score not match")
break;
case 100:
   console.log("scroe is matched");
break
   default :
   console.log("default")
   break;
 }
//  falsy value
// false ,0,-0,undefined,null,NaN,BigInt,""

//  truthly value
// "0","false" , " " , [] , {},function(){}

//  sum value 
// false == 0 true;
// false == "" true;
// 0 == "" true;

// Logical AND (&&)

const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// Expected output: false


// Logical OR (||)

console.log(a > 0 || b > 0);
// Expected output: true

// Nullish coalescing operator (??) null and undefined 

const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const foo1 = undefined ?? 'string';
console.log(foo1);
// Expected output: "string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

// Logical NOT (!)
 let numbers = 100;

 console.log(numbers  >= 0 ? " number 0 se bda hai" : "........")