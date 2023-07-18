const myArr = [0,1,2,3,4]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(0,1,2,3,4)
 
// console.log(myArr2);

// Array Methods
//  myArr.push(5)
//  myArr.push(5)
//  console.log(myArr);
//  myArr.pop()
// myArr.unshift(-1)
//  console.log(myArr);
//  myArr.shift()
//  console.log(myArr);

// console.log(myArr.includes(9));    // return boolean type result
// console.log(myArr.indexOf(1));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);


// slice - it will not update origina array, 
// splice - it will update original array

// console.log("A -> ",myArr);
// const myNewArr1 = myArr.slice(1,3)
// console.log("Result after slice : ",myNewArr1);
// console.log("Original Array after slice operation done : ",myArr);

console.log("B -> ",myArr);
const myNewArr2 = myArr.splice(1,3)
console.log("Result after splice : ",myNewArr2);
console.log("Original Array after splice operation done : ",myArr);