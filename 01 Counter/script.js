function counter(type) {
  let display = document.querySelector('p')
  let currentValue = display.innerText

  if (type === "down" && currentValue > 0) {
    currentValue--
    display.innerText = currentValue
  } else if (type === "up") {
    currentValue++
    display.innerText = currentValue
  }
}