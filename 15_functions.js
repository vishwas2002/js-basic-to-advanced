

function saymyname(){
    console.log("Vishwas ");
    console.log("is ");
    console.log("hot");

}

// saymyname()

// function addTwoNumbers(number1 , number2){

//        console.log(number1 + number2);
       
//     }
// function addTwoNumbers(number1 , number2){

//     // let result = number1+ number2;
    
//     return number1+ number2
    
       
//     }
// const result = addTwoNumbers(24,655);

// console.log("Result value is: ", result);

function loginUserMessage(username = "Vishwas"){
    // Empty string is considered a false value 
    if(!username){
      console.log("Please enter correct username");
      return
    }
    return `${username} just logged in to the server`
}
console.log(loginUserMessage());
