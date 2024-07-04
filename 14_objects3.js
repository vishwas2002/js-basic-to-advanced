// destructering of Arrays and Objects 

const course = {
     coursename : "js in hindi",
     price : "999",
     courseinstructor : "Vishwas",


}
// Extracting the value from the above object 
const {courseinstructor : instructor} = course
console.log(instructor);




let obj1 = {
    name : "Vishwas Sharma",
    id : "vishuashoks@gmail.com",
    phone : "7015615539",
    
}
const {name : nickname} = obj1;
// console.log(name);
console.log(nickname);

// {
//     "name" : "Vishwas",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

