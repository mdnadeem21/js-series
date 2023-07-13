let  name = "Nadeem"

// console.log(`My name is ${name}`);

let gameName = new String("FIFA-WORLD-CUP")

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(4)); //case senstive
// console.log(gameName.indexOf("A"));
// let newString = gameName.substring(0,5) // we can't use negetive value here
// console.log(newString);

// let anotherString = gameName.slice(-13,4)
// console.log(anotherString);

const newStringOne = "   Nadeem     "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://nadeem.com/about%20nadeem"
const newUrl = url.replace('%20','-')
// console.log(newUrl);
// console.log(url.includes('nadeem'));
console.log(gameName.split('-'));