const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink () {
  const { scrollY, scrollX } = window
  const { width, height, top, left } = this.getBoundingClientRect()
  highlight.style.width = `${width}px`
  highlight.style.height = `${height}px`
  highlight.style.transform = `translate(${left + scrollX}px, ${top + scrollY}px)`
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
