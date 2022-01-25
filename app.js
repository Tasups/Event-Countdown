
const daysLeft = document.getElementById('days-left')
const hoursLeft = document.getElementById('hours-left')
const minutesLeft = document.getElementById('minutes-left')
const secondsLeft = document.getElementById('seconds-left')
const birthdayOrNot = document.getElementById('birthday-or-not')

const birthday = new Date('01/28/2022')
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId;

function countDown(){
  const today = new Date()
  const timespan =  birthday - today
  const days = Math.floor(timespan / day)
  const hours = Math.floor((timespan % day) / hour)
  const minutes = Math.floor((timespan % hour) / minute)
  const seconds = Math.floor((timespan % minute) / second)

  daysLeft.innerHTML = `${days} days`
  hoursLeft.innerHTML = `${hours} hours`
  minutesLeft.innerHTML = `${minutes} minutes`
  secondsLeft.innerHTML = `${seconds} seconds`
  birthdayOrNot.innerHTML = `${timespan <= 0 && timespan >= -day ? null : "until your birthday."}`
}

timerId = setInterval(countDown, 1000)

countDown()

