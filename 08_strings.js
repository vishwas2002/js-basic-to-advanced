const gameName = new String('Vishwas-bz');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(5,4)
console.log(anotherString);

