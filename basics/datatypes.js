const accountId=1234
let accounstEmail="shreya@gmail.com"
var accountName="shreya"
let accountState


/*
 Javascript has only two types of variables - const and let
 Earlier javascript used to struggle to work with block scope and functional scope therefore its prefer not to use 'var' instead use 'let'
 A variable name with no variable type can also be defined here but it wont be recommended
 If we define only the variable and not any value to it javascript gives it a value as 'undefined'
 */

 "use strict";  //treat all JS code as newer version and from then on all the ode will be treated as newer version only there is no undoing

//  alert(3+3)   if we use browser version i.e. using html it will display a pop of 6 we here are using node thus it will give error 
// if we have to write two sepearet lines of code together in one line itself there we can end the first line using ; to define that there are two different lines else just write the code in separate lines only 
// to read about alert - refer to "alert mdn" documentation by mozilla howeveer this isnt the official. ECMAScript - official documentations for javascript and other scripting languages also

// datatypes
let name ="shreya"
let age=1
let isLoggedIn=true



/* Primitive datatype
   
 number - 2 to power 53
 BigInt
 string
 Boolean
 null - standalone value
 undefined
 sybmol- to find uniqueness



 Reference (Non Primitive)

 array
 object - user defined datatype
 functions

*/


const arr=["ab","bc"]
let myobject={
   name:"shreya",
   age:22
}

const myfunction=function(){
   console.log("Hello")
}

// return type of non primitive is object only. however for function it is said to be object function

console.log(typeof age); // to find the datatype of the variable

/* console.log(typeof null); - gives 'object'
   console.log(typeof undefined); - gives 'undefined'

   for ex- let num=33   - this will give the datatype as number but num="33" will give the datatype as string 
   to convert it we do type conversion as -
   let num2= Number(num) - now whatever value comes in the num will be converted to Number whether it is actually a number or not 
   print num2 will give 33 if the num="33" 
   but if num ="33abd" num2 will give NaN (Not a Number) although it will be converted but there will be no value for it 
   if num = null num2 will give 0 , num=undefined num2= NaN, num=true num2= 1 and 0 for false
*/

// let isloggedin=1,0,"","shreya"
let boolconvert=Boolean(isloggedin)

// after conversion : 1- true , 0- false , "" - false, "shreya"- true

//**************Operations****************

let value=1
let negvalue=-value

console.log(1+1)
console.log(1*1)
console.log(1-1)
console.log(1**1) // power
console.log(1/1)
console.log(1%1)


let str1="hello"
let st2="world"
let str3= str1+str2 //concatenate string
console.log("1"+2)   // output - 12
console.log(1+"2")   // output - 12
console.log("1"+2+2) // output - 122  when string comes forst the next are treated as string
console.log(2+2+"1") // output - 32    when int comes first the next are treated as number
console.log(+true) // true has a value of 1 thus it will give output as 1 but it isnt incrementing anything  
// can do post and pre increament like ++a or a++


 //**********comparison *******

 // Below these works normally
 console.log(1>2 )
 console.log(1<2 )
 console.log(1>=2 )
 console.log(1==2 )
 console.log(1!=2 )


console.log("1">2) // it converts the string "1" to number
console.log(null>0 )   //false
console.log(null ==0)  //false
console.log(null>=0 ) //true   Reason - equality check == and comparisons > < >= <= work diffrently . comparisions convert null to a number treating it as 0
console.log(undefined>=0 ) // gives false in all the operators
console.log(1==="1" ) // false Reason - === is a strict check it also checks the datatype

