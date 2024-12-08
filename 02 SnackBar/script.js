function snackbar(texto_input, tempo) {
  let container = document.getElementById('snackbar_container')
  tempo = +tempo

  let newSnackbar = document.createElement('div')
  newSnackbar.className = "snackbar"

  let texto = document.createElement('p')
  texto.innerText = texto_input

  let timer = document.createElement('div')
  timer.className = "timer"
  timer.style.animation = `timer_anim ${tempo}s linear 1s`
  newSnackbar.appendChild(texto)
  newSnackbar.appendChild(timer)
  container.appendChild(newSnackbar)

  setTimeout(() => {
    newSnackbar.style.animation = `snack_end 1s`
  }, (tempo + 1) * 1000)

  console.log((+tempo + 1) * 1000)

  setTimeout(() => {
    if (container.contains(newSnackbar)) {
      container.removeChild(newSnackbar)
    }
    console.log("end")
  }, (tempo + 2) * 1000) // Snackbar full time = Snack Time + show + hide animation
}