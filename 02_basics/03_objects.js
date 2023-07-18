// Object types i - singleton ii - object literals

// Singleton
// Object.create()  - implementation

// Object literals

const mySymbol = Symbol("key1")

const jsUser = {
    name : "Nadeem",
    "full name" : "Md Nadeem",
    [mySymbol]  : "mykey1",
    location : "Kolkata",
    email : "nadeem@google.com",

}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySymbol])
// console.log(typeof mySymbol)

// jsUser.email = "nadeem@microsoft.com"
// Object.freeze(jsUser)  // use to make object immutable
// jsUser.email = "nadeem@chatgpt.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

jsUser.greeting()
jsUser.greetingTwo()
