let interval, countingTime
let minTime = 300, maxTime = 3000

function lights() {
  document.getElementById('reactionTimeDisplay').style.display = "none"
  document.getElementById('startButton').style.display = "none"
  document.getElementById('stopTime_btn').style.display = "block"
  let allLights = document.querySelectorAll('.light')
  let currentLight = 1
  let lightDiv
  let randomOutTime = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime)
  console.log(randomOutTime)
  interval = setInterval(() => {
    if (currentLight > 5) {
      clearInterval(interval)
      setTimeout(() => {
        allLights.forEach(light => {
          light.style.opacity = ".3"
        });
        countingTime = new Date().getTime()
      }, randomOutTime);
      return
    }
    lightDiv = document.getElementById('light' + currentLight)
    lightDiv.style.opacity = 1
    currentLight++
  }, 1000);
}

function stopTime() {
  let allLights = document.querySelectorAll('.light')
  let currentTime = new Date().getTime()
  let stoppingTime = currentTime - countingTime
  let reactionTimeDisplay = document.getElementById('reactionTimeDisplay')
  clearInterval(interval)
  allLights.forEach(light => {
    light.style.opacity = ".3"
  });

  reactionTimeDisplay.style.display = "block"
  if (!countingTime) {
    reactionTimeDisplay.innerText = `Oops... Too early`
  } else {
    reactionTimeDisplay.innerText = `Reaction Time: ${stoppingTime}ms`
  }
  document.getElementById('stopTime_btn').style.display = "none"
  document.getElementById('startButton').style.display = "block"
}