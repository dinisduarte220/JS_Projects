let interval, date
clock('24')

function clock(mode) {
  let display = document.getElementById('display')
  if (interval) {
    clearInterval(interval)
  }
  if (mode === '12') {
    let indicator
    interval = setInterval(() => {
      date = new Date()
      if (date.getHours() > 12) {
        indicator = "PM"
      } else {
        indicator = "AM"
      }
      display.innerText = `${(date.getHours()-12).toLocaleString(undefined, { minimumIntegerDigits: 2})}:${date.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2})}:${date.getSeconds().toLocaleString(undefined, { minimumIntegerDigits: 2})} ${indicator}`
    }, 500);
  } else {
    interval = setInterval(() => {
    date = new Date()
      display.innerText = `${date.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2})}:${date.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2})}:${date.getSeconds().toLocaleString(undefined, { minimumIntegerDigits: 2})}`
    }, 500);
  }
}