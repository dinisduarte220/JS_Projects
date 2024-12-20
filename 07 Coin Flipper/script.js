let heads_total = 0, tails_total = 0
let timeout = null

function flip() {

  if (timeout) {
    return
  }

  const coin = document.getElementById('coin')
  const isHeads = Math.random() > 0.5

  coin.style.transition = 'transform 4s ease-in-out'

  const flips = 5
  let finalAngle = 0
  if (!isHeads) {
    finalAngle = 180
  }
  const rotation = 360 * flips + finalAngle

  coin.style.transform = `rotateY(${rotation}deg)`

  console.log(rotation)

  timeout = setTimeout(() => {
    if (isHeads) {
      heads_total++
    } else {
      tails_total++
    }
    document.getElementById('results').innerHTML = `Heads: ${heads_total} <br>Tails: ${tails_total}`
    timeout = null
    coin.style.transition = 'transform 0s'
    coin.style.transform = `rotateY(${finalAngle}deg)`
  }, 4000)
}