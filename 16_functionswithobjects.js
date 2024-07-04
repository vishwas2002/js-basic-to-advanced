function calculateCartprice(val1 , val2,...num1){
    return num1
}
// console.log(calculateCartprice(200,400, 500,2000));

// const user = { 
//     usrname : "Vishwas",
//     price : 99,

// }
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username : "Vishwas",
    price   : 499,
})
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
