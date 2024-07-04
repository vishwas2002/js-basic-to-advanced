//  ARRAYS 

// const myArr = [0,1,2,3,4,5,true , "Vishwas"]

// console.log(myArr[7]);

// Shallow copy 

// let originalArray = [1,2,[88,60]];

// let shalloworiginalArray = originalArray;

// shalloworiginalArray [2][1] = 76;

// console.log(shalloworiginalArray);
// console.log(originalArray);
// // Object 
// let myObj={
//     name : "Vishwas",
//     age : 21,
//     address :"India",

// }
// let myobj2 = myObj;
// myobj2.name = "harish"
// console.log(myObj.name);
// console.log(myobj2.name);

// let a = 10 ;
// let b = 20;
// a=b;
// console.log(a);
// console.log(b);
// // Deep COpy 

// let originalArray = [1,2,[3,4]]
// let deepcopyArray = JSON.parse(JSON.stringify(originalArray));

// deepcopyArray[2][0] = 99;
// console.log(originalArray);
// console.log(deepcopyArray);

// const myHeroes = ["Shaktiman", "Ashok"];
// const myArrray2 = new Array(1,2,3,4);
// console.log(myArrray2);

// Array Methods
let myArr = [1,2,3,4,5]
// myArr.push(6);
// myArr.push(45);

// console.log(myArr);  // Adds an element at the end of an array 
// console.log(typeof(myArr));  

// myArr.unshift(455);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

// Slice,Splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)  // the element at third index is not included 
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C", myArr);













