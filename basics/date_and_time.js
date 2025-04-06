/*Temporal - a global library like Math for time and date 

 Its not yet implemented

 */
let date1=new Date()
console.log(date1)           //2025-04-06T06:22:38.188Z
console.log(typeof date1)    //object - since we created a object of date here

//can convert the date to any format as defined by the inbuilt functions
console.log(date1.toString())   //Sun Apr 06 2025 06:22:38 GMT+0000 (Coordinated Universal Time)
console.log(date1.toLocaleString()) //4/6/2025, 6:22:38 AM
console.log(date1.toDateString())   //Sun Apr 06 2025

let newdate= new Date(2002,11,29)
console.log(newdate.toDateString()) //Sun Dec 29 2002

let newdate2= new Date(2002,11,29,11,11) 
console.log(newdate2.toLocaleString()) //12/29/2002, 11:11:00 AM

let newdate3= new Date("2002-11-29")
console.log(newdate3.toDateString())  //Fri Nov 29 2002

let timestamp1=Date.now()
console.log(timestamp1)                   //1743921223054
console.log(newdate.getTime())            //1041120000000
console.log(Math.floor(Date.now()/1000)) // get the time in seconds = 1743921223


//Specify in what format or style you want your date i.e. customise the date
newdate.toLocaleString('default',{
    weekday:"long",
    
})
