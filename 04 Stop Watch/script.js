let timer
let hours = 0, minutes = 0, seconds = 0, mili_seconds = 0
let display = document.getElementById('display')

// Make all numbers be two digits minimum
function formatTime(unit) {
  return String(unit).padStart(2, '0')
}
// Update Display
function updateDisplay() {
  if (hours > 0) {
    display.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
  } else if (minutes > 0) {
    display.innerText = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(mili_seconds)}`
  } else {
    display.innerText = `${formatTime(seconds)}:${formatTime(mili_seconds)}`
  }
}
// Start Timer
function start() {
  timer = setInterval(() => {
    mili_seconds++
    if (mili_seconds > 99) {
      mili_seconds = 0
      seconds++
      if (seconds > 59) {
        seconds = 0
        minutes++
        if (minutes > 59) {
          minutes = 0
          hours++
        }
      }
    }
    updateDisplay()
  }, 10)
}
// Pause Timer
function pause() {
  clearInterval(timer)
}
// Stop Timer
function stop() {
  clearInterval(timer)
  hours = 0
  minutes = 0
  seconds = 0
  mili_seconds = 0
  updateDisplay()
}