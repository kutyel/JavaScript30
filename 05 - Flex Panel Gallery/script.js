const panels = Array.from(document.querySelectorAll('.panel'))

function toggleOpen () {
  this.classList.toggle('open')
}

function toggleActive (e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach(p => {
  p.addEventListener('click', toggleOpen)
  p.addEventListener('transitionend', toggleActive)
})
