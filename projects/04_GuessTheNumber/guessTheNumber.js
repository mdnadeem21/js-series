let RandomNumber = parseInt((Math.random()*100 + 1));
console.log(RandomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;


if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guessedNumber = parseInt(userInput.value);
        console.log(guessedNumber);
        validateGuess(guessedNumber)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if(guess < 1){
        alert("Please enter a number more than 1");
    }else if(guess > 100){
        alert("Please enter a number less than 100");
    }else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${RandomNumber}`);
            endGame();
        }else{
           displayGuess(guess);
           checkGuess(guess); 
        }
    }
    
}
function checkGuess(guess){
    if(guess === RandomNumber){
         displayMessage(`You guessed it right`);
         endGame();
    }else if(guess < RandomNumber){
        displayMessage(`Number is too LOW`)
    }else if(guess > RandomNumber){
        displayMessage(`Number is too HIGH`)
    }

}
function displayGuess(guess){

    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){

    lowOrHi.innerHTML = `<h3>${message}</h3>`

}
function endGame(){

    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame" >Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();


}
function newGame(){
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener('click', function(){
        RandomNumber = parseInt((Math.random()*100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeAttribute(p);
        playGame = true;


    })
}
