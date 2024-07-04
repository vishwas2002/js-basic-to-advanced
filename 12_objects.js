// singleton
// Object literals


const mySym = Symbol("key1")

const jsUser = {
 name : "Vishwas",
 age : 21,
 [mySym] : "mykey1",
 location : "Ambala",
 email : "vishwas@google.com",
 isLoggedIn : false,
 lastLoginDays : ["Monday","Saturday"],

}
 
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

// jsUser.email = "vishwas@chatgpt.com"
// Object.freeze(jsUser);
// jsUser.age = 41
// console.log(jsUser);


jsUser.greeting = function()
{
    console.log("hello to the js user");
    
}
jsUser.greetingTwo = function()
{
    console.log(`hello to the js user , ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

