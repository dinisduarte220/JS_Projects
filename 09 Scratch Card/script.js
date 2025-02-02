let winItems
let scratchedCards = 0

loadLottery()

function loadLottery() {
  document.getElementById('result').style.display = "none"
  winItems = 0
  scratchedCards = 0
  
  for (let i = 1; i <= 3; i++) {
    const scratchCanvas = document.getElementById('scratchCanvas' + i)
    const scratchImage = document.getElementById('hiddenImage' + i)
    const ctx = scratchCanvas.getContext('2d', { willReadFrequently: true })
    
    scratchCanvas.width = 100
    scratchCanvas.height = 100
    scratchCanvas.style.display = 'block'
    
    const randomValue = Math.floor(Math.random() * 10)
    if (randomValue > 5) {
      scratchImage.setAttribute('src', 'IMG/bomb.png')
    } else {
      scratchImage.setAttribute('src', 'IMG/cherries.png')
      winItems++
    }
    
    resetCanvas(ctx, scratchCanvas)
    setupScratchEvent(scratchCanvas, ctx, i)
  }
}

function resetCanvas(ctx, canvas) {
  ctx.fillStyle = 'rgb(75, 75, 75)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.globalCompositeOperation = 'source-over'
}

function setupScratchEvent(canvas, ctx, index) {
  let isScratching = false

  const scratch = (e) => {
    const rect = canvas.getBoundingClientRect()
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 15, 0, Math.PI * 2)
    ctx.fill()
    
    checkScratchedPercentage(canvas, ctx, index)
  }

  canvas.addEventListener('mousedown', () => (isScratching = true))
  canvas.addEventListener('mouseup', () => (isScratching = false))
  canvas.addEventListener('mousemove', (e) => isScratching && scratch(e))
  canvas.addEventListener('mouseleave', () => (isScratching = false))

  canvas.addEventListener('touchstart', (e) => {
    isScratching = true
    scratch(e)
  })
  canvas.addEventListener('touchend', () => (isScratching = false))
  canvas.addEventListener('touchmove', (e) => isScratching && scratch(e))
}

function checkScratchedPercentage(canvas, ctx, index) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const pixels = imageData.data
  let transparentPixels = 0

  for (let i = 3; i < pixels.length; i += 4) {
    if (pixels[i] === 0) {
      transparentPixels++
    }
  }

  const scratchedPercentage = (transparentPixels / (pixels.length / 4)) * 100
  if (scratchedPercentage >= 50) {
    if (canvas.style.display !== 'none') {
      scratchedCards++
      canvas.style.display = 'none'
    }
    
    if (scratchedCards === 3) {
      result()
    }
  }
}

/* Game result */
function result() {
  const resulContainer = document.getElementById('result')
  const display = document.getElementById('resultDisplay')

  if (winItems === 3) {
    display.innerText = "You are a winner!"
  } else {
    display.innerText = "Better luck next time!"
  }
  resulContainer.style.display = "block"
}