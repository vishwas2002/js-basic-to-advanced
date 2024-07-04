// primitive 

//  7 types : String , Boolean , null , undefined , Symbol, BigInt ,Number 

const score =100; 
const scorevalue = 100.3

const isloggedIn = false
const outsideTemp = null

const id = Symbol('123')

const anotherId = Symbol('123');
console.log(id === anotherId);



// Refernce / Non-primitive 
// Array , objects , Functions 

const heroes = ["shaktiman", "nagraj","Bheem"]
let myObj = {
    name : "Vishwas",
    age : 22,

}

const myFunction=function(){
 console.log("hello World ");
 
}
myFunction()