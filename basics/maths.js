const num1=100
console.log(num1)

const num2=new Number(100)    // define by object
console.log(num2)             //output = [Number:100]
// have some prototype functions in it 
// ex-

console.log(num2.toString())   //convert number to string
console.log(num2.toFixed(2))   //number of decimal places 

const num3=123.4566
console.log(num2.toPrecision(4)) //output =123.5
// sets precision i.e. total number of digits in the number but priority is given to the number before decimal

const num4=10000000
console.log(num2.toLocaleString('en-IN')) //output=10,00,000
//converts numbers to the type of number system



// ****************** Math ****************


console.log(Math)
console.log(Math.abs(-4))     // output= 4
console.log(Math.round(1.2))  // output= 1
console.log(Math.ceil(1.2))   // output= 2
console.log(Math.floor(1.2))  // output= 1
console.log(Math.max(1,2,3,4,5)) //output= 5
console.log(Math.random());    // picks a random number between 0 and 1
console.log((Math.random()*10)+1);    // picks a random number between 0*10 and 1*10 and adds 1 to it 

const min=10
const max=20
console.log(Math.random()*(max-min+1)+min) //To define our own range of values