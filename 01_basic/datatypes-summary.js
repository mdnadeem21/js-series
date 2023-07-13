/**
 * Data types are define on the basis of how datas are stored in memory and it is of two type
 * 1 - Primitive
 * 2 - Non - primitive
 * 
 * 1 - Primitive (it is call by value)
 *     7 type  :  String, Number, Boolean, null, undefine, Symbol, BigInt
 * 
 * 
 * 
 * 2 - Reference (Non primitive)
 *     Array, Objects, Functions
 */

// Primitive
 const id = Symbol("123")
 const anotherId = Symbol("123")
 const bigNumber = 123654789n;
 const outSideTemp = null;
 let userEmail;

 console.log("Id : ",id);
 console.log("anotherId : ",anotherId);
 console.log(id === anotherId);


 // Reference

 const heros  = ["shaktiman","nagraj", "doga"];
 let myObj = {
    name : "Nadeem",
    age : 23
 }

 const myFunction = function(){
    console.log("Hello World");
 }

 console.log(typeof id);