const slider = document.querySelector('.items')
let isDown = false
let startX, scrollLeft

slider.addEventListener('mousedown', ({ pageX }) => {
  isDown = true
  slider.classList.add('active')
  startX = pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave', () => {
  isDown = false
  slider.classList.remove('active')
})

slider.addEventListener('mouseup', () => {
  isDown = false
  slider.classList.remove('active')
})

slider.addEventListener('mousemove', e => {
  if (isDown) {
    e.preventDefault()
    const walk = e.pageX - slider.offsetLeft - startX
    slider.scrollLeft = scrollLeft - walk
  }
})
