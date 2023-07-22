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

console.log(loginUserMessage("Nadeem"));