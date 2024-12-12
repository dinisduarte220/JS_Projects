function checkText(text) {
  let letters = text.length
  let words = text.split(' ').filter(word => word.trim() !== '').length // Count words with multiple spaces in a row
  let display = document.getElementById('display')

  display.innerText = `${words} Words / ${letters} Letters`
}