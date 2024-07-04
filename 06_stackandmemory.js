//  ++++++++++++++++++++++++MEMORY IN JS++++++++++++++++++++++++++++++++
// Stack + Heap 

// in all primitive datatypes , stack memory is used
// in all non-primitive datatypes, heap memory is used

let myYoutubename = "MarketWizards"

let anothername = myYoutubename

anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "üser@gmail.com",
    bankId : "user@okhdfcbank",

}
let userTwo = userOne
userTwo.email = "vishwas@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
