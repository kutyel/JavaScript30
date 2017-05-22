const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top').getBoundingClientRect()

function handleEnter () {
  this.classList.add('trigger-enter')
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)
  background.classList.add('open')

  const dropdown = this.querySelector('.dropdown')
  const { width, height, top, left } = dropdown.getBoundingClientRect()
  background.style.setProperty('width', `${width}px`)
  background.style.setProperty('height', `${height}px`)
  background.style.setProperty('transform', `translate(${left - nav.left}px, ${top - nav.top}px)`)
}

function handleLeave () {
  this.classList.remove('trigger-enter', 'trigger-enter-active')
  background.classList.remove('open')
}

triggers.forEach(t => {
  t.addEventListener('mouseenter', handleEnter)
  t.addEventListener('mouseleave', handleLeave)
})
