let timerId;

function countDown () {
  
//getting html tags by id
const daysLeft = document.getElementById('days-left');
const hoursLeft = document.getElementById('hours-left');
const minutesLeft = document.getElementById('minutes-left');
const secondsLeft = document.getElementById('seconds-left');
const birthdayOrNot = document.getElementById('birthday-or-not');

//pulling in the date and event values from the form 
const event = document.getElementById("event-name").value;
const date = document.getElementById("event-date").value;

console.log(event, date);

const birthday = new Date(date);
console.log(event);
console.log(date);
console.log(birthday);

//initializing the values of days, hours, minutes, seconds in milliseconds
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;


//calculating time left to the event
  const today = new Date();
  const timespan =  birthday - today;
  const days = Math.floor(timespan / day);
  const hours = Math.floor((timespan % day) / hour);
  const minutes = Math.floor((timespan % hour) / minute);
  const seconds = Math.floor((timespan % minute) / second);
  
  //if it is the day of the event
  if (timespan <= 0 && timespan > -day) {
    birthdayOrNot.innerHTML = `HAPPY ${event.toUpperCase()} !!!`;
    return;
  }
  //continual countdown each second
  daysLeft.innerHTML = `${days} days`;
  hoursLeft.innerHTML = `${hours} hours`;
  minutesLeft.innerHTML = `${minutes} minutes`;
  secondsLeft.innerHTML = `${seconds} seconds`;
  birthdayOrNot.innerHTML = `until your ${event}.`;
}

function startTimer () {
  timerId = setInterval(countDown, 1000);
}