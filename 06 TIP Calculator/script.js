let tipPercentage = 0

function range(value) {
  let display = document.getElementById('rangeDisplay')
  display.innerText = value + " %"
  calculateTIP(document.getElementById('value_input').value, value)
}

function calculateTIP(value, percentage) {
  let display = document.getElementById('finalValue')
  value = parseFloat(value);
  percentage = parseFloat(percentage)

  if (value < 0) {
    display.innerText = "The value must be positive"
    return
  } else if (isNaN(value)) {
    display.innerText = ""
    return
  }

  let tipValue = (value * percentage) / 100
  let finalValue = value + tipValue // Final Value = Bill value + The percentage of the bill

  display.innerHTML = `<br>Bill: ${value}<br>TIP: ${tipValue}<br>Total: ${finalValue}`
}