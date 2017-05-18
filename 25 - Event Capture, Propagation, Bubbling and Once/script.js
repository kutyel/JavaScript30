const divs = document.querySelectorAll('div')
const button = document.querySelector('button')

function log (e) {
  console.log(this.classList.value)
  e.stopPropagation() // stop bubbling!
}

divs.forEach(d => d.addEventListener('click', log, { capture: true }))
button.addEventListener('click', () => console.log('Click!'), { once: true })
