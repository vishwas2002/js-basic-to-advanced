//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Vishwas"
tinderUser.isLoggedin = false
// console.log(JSON.stringify(tinderUser));

const regularuser = {

    email : "radhika@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Vishwas",
            lastname : "Sharma",

        }
    }

}
// console.log(regularuser.fullname.userfullname.firstname);
// // console.log(regularuser.fullname?.userfullname.firstname);
const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "a",
    4 : "b"
}
const obj4 = {
    5 : "a",
    6 : "b"
}
// const obj3 = {obj1,obj2}
// console.log(obj3);

// const obj3 = Object.assign(obj1,obj2,obj4) // it joins all the objects mentioned int he paranthesis and returns a traget object
// const obj3 = {...obj1,...obj2};

// console.log(obj3);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLogged'));

