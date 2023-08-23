const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Chai",email : "chai@example.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function (){
        let error = false;
        if(!error){
           resolve({username : "Nadeem002",password : "258852"});
        }else{
          reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
      console.log(user);
      return user.username
}).then(function(username){
      console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function (){
        let error = false;
        if(!error){
           resolve({username : "JavaScript",password : "258852"});
        }else{
          reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    // console.log(`Type :  ${typeof response}`);
    console.log(`Response : ${response}`);
   } catch (error) {
     console.log(`Error from promiseFive: ${error}`);
   }
}
consumePromiseFive();


// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//    } catch (error) {
//         console.log("Error: ",error);
//    }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
      console.log(data);
})
.catch(function(error){
    console.log("Error form 6th promise: ",error);
})