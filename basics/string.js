const name="shreya"
const age =22
console.log(name + "is" + age ) // concatenating string


// better approach
// also known as string interpolation
// can also use functions such as min ,touppper, etc
console.log(`Shreya is ${age}`) // use back dash 

const newname= new String("Shreya") //string variable is made using object
// makes key value pairs for each index in the string ex- 0:S , 1:h ....
// and also allows methods/functions on the string such as Concat,length, fontcolor, etc 
// ex
console.log(newname.length); 
console.log(newname.toUpperCase()); // doesnt change the original string(because it is a primitive data type i.e. uses stack memory space where the copy of instance is made)
console.log(newname.charAt(1)); 
console.log(newname.indexOf('h'));
const newstr=newname.substring(0,3)
console.log(newstr);

const newstr2=newname.slice(0,3) // can also use negative indexing
console.log(newstr2);

const newstr3="       shreya  " 
console.log(newstr3.trim()); // will remove the end and starting whitespace( white space characters and line terminators) from the string


const url="www.google-50.com"
console.log(url.replace('-50',''));
console.log(url.includes('google'));  // returns true or false
