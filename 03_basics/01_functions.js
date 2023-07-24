function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("M");
}
// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
 function addTwoNumbers(num1,num2){
    // let result = num1+num2;
    // return result

    return num1+num2
}

const result = addTwoNumbers(3,5)
// console.log(result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter user name");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Nadeem"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Nadeem",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));