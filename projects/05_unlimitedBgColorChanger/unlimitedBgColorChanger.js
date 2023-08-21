// Generate a random color
const randomColor = function(){
    const hex = "01236456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color
}

let startIntervalId;
const startChangingColor = function(){

   if(!startIntervalId){
    startIntervalId =  setInterval(changeBgColor,1000);
   }
   function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
   }

     
}
const stopChangingColor = function(){
    clearInterval(startIntervalId);
    startIntervalId = null;

}

const startBtn = document.getElementById('start');
startBtn.addEventListener('click',startChangingColor);
const stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click',stopChangingColor);