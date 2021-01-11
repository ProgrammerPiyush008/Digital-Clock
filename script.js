const minute = document.getElementById('minutes')
const hour = document.getElementById('hours')
const second = document.getElementById('seconds')
const locationText = document.getElementById('location')
const day = document.getElementById('day')

function setTime(){
  const currentDate = new Date()
  minute.innerText = currentDate.getMinutes() + ' :'
  hour.innerText = currentDate.getHours() + ' :'
  second.innerText = currentDate.getSeconds()
  day.innerText = currentDate.toDateString()
}

setTime()

setInterval(setTime, 1000)
