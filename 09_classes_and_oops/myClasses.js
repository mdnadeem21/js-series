// ES6

// class User{
//     constructor(username,email,pass){
//         this.username = username;
//         this.email = email;
//         this.pass = pass;
//     }

//     encryptPass(){
//         return `${this.pass}abc`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com",123);
// console.log((chai.encryptPass()));
// console.log((chai.changeUsername()));

// behind the scene

function User(username,email,pass){
        this.username = username;
        this.email = email;
        this.pass = pass;
}

User.prototype.encryptPass = function(){
    return `${this.pass}abc`;
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}
const tea = new User("tea","tea@gmail.com",123);
console.log((tea.encryptPass()));
console.log((tea.changeUsername()));