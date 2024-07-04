let a = 300
// Everything wirtten without {} is called global scope 

if(true){  
    // Everything written under these {} is called block scope
let a = 10
const b = 20
var c = 30
console.log( "The value in block scope is",a);

    }
console.log(a);   // 
// console.log(b);
// console.log(c);
