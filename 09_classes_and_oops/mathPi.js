
// const piDescripter = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
const User = {
    id : 1,
    name : "Nadeem",
    isLoggedIn : true
}

const userDescripter = Object.getOwnPropertyDescriptor(User,"id");
// console.log(userDescripter);
// User.id = 2;
// console.log(User);
Object.defineProperty(User, "id",{
    writable : false,
    enumerable : true
})
console.log( Object.getOwnPropertyDescriptor(User,"id"));
User.id = 2;
console.log(User);