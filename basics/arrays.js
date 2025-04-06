/*
 Arrays 

      Arrays in javascript are resizebale
      Can contain a mix of different data types
      Array copy operations creates shallow copies. (shallow copy (properties share the same reference point) , deep copy (do not share the same reference points) )

*/

const array1=[0,1,2,3,4,5]
const array2=["ball","bat","gloves"]
const array3=new Array(1,2,3,4)


array1.push(6)
console.log(array1)  //[0, 1, 2, 3, 4, 5, 6]

array1.pop()
console.log(array1)  //[ 0, 1, 2, 3, 4, 5 ]

array1.unshift(-1)
console.log(array1)  //[ -1, 0, 1, 2,3, 4, 5]

array1.shift()
console.log(array1)  //[ 0, 1, 2, 3, 4, 5 ]

console.log(array1.includes(2)) //true

console.log(array1.indexOf(2))  //2

const array4=array1.join()    //changes the datatype
console.log(array1)             //[ 0, 1, 2, 3, 4, 5 ]
console.log(array4)             // 0,1,2,3,4,5    - now its a string not array

const array5=array1.slice(1,3)   //slice only extracts the range of indexes without changing the original array
console.log(array5)              //[ 1, 2 ]

const array6=array1.splice(1,3)  //splice trims the array i.e. makes changes in the original array
console.log(array6)              // [ 1, 2, 3 ]
console.log(array1)              // [ 0, 4, 5 ]

const team1=["rohit","rohan","arun"]
const team2=["sneha","angli","reeti"]

team1.push(team2)
console.log(team1) 

const team3=team1.concat(team2)
console.log(team3)

const team4=[...team1,...team2]
console.log(team4)

const team5=[1,2,3,[4,5],6,[7,8,[9,10]]]
const newteam5=team5.flat(Infinity)
console.log(newteam5)


