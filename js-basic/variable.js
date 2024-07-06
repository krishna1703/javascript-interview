const accountId = 202020
let accountEmail = "krishna@gmail.com"
var accountPassword = "123456"
acoountCity = "kanpur"

// accountId = 2; not allowed  for const 

// {
    //  block  scope
// }


// prefer not to use var  because of issue in block scope and functional scope

 let krishna ; 
// undefined
//  const krishna1 ;
 var krishna2;
//  undefined



console.log(accountId)
accountEmail = "@gmail.com"
accountPassword = "2"
acoountCity = "jaipur"

 console.table([accountEmail ,accountPassword , acoountCity,krishna,krishna2 ])
