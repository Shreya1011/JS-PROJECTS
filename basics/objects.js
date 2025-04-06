/*
    Objects

        Can be declared as literal or constructors

        Singleton - when object is made using constructor it is made as singleton (one)
        when made using literals songleton is not made i.e. multiple references are created

 
*/            

//***********object literal***********

//data is stored as key value pairs


const obj1={
    name:"Shreya",
   "gender":"female",
    age:22,
    location:"Jaipur",
    email:"example@gmail.com"
}


console.log(obj1.email)
console.log(obj1["email"])
console.log(obj1.gender)
console.log(obj1["gender"])

//symbols can also be used as key

const symbol1=Symbol("symbolkey") //used in brackets

const obj2={
    name:"Shreya",
    [symbol1]:"key of symbol"
}

console.log(obj2[symbol1]) //output - key of symbol

obj1.email="newemail@gmail.com"
console.log(obj1.email)      // output - newemail@gmail.com
Object.freeze(obj1)
obj1.email="example@gmail.com"  //after freeze the value doesnt changes
console.log(obj1.email)      //output - newemail@gmail.com   


//function of an object

obj2.function2=function(){
    console.log("This is function2")
}
obj2.function2()

obj2.function1=function(){
  console.log(`this is ${this.name}`);
}
obj2.function1();





//*********** Constructor (Singleton) ************

const user1=new Object()   //singleton object
const user2={              //non singleton object

}

user2.id="123abc"
user2.name="shreya"
user2.status="false"

const user3={                                 //nesting keys and also be declared
    email:"example2gmail.com",
    name:{
        firstname:"Shreya",
        lastname:"Yadav"

    },
    age:22
}

console.log(user3.name.firstname)


const obj3={1:"a",2:"b"}
const obj4={3:"c",4:"d"}
const obj5={obj3,obj4}            //will store object insdie object
const obj6=Object.assign({},obj3,obj4)    //will concatenate two objects {} is optional here it just guarantes that all the values will be added

