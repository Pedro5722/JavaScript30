//set clock hands in variables
const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate(){
  var now = new Date();
  //set time in separate variables
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
  //sets clock hands degrees
  var hoursDegrees = ((hours / 12) * 360) + 90;
  var minutesDegrees = ((minutes / 60)*360)+90;
  var secondsDegrees = ((seconds / 60)*360)+90;
  
  //rotating the clock hands
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`; 
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  console.log(now);
}

setInterval(setDate, 1000)