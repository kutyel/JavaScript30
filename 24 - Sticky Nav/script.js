const { offsetTop, offsetHeight } = document.querySelector('#main')

const fixNav = () => {
  if (window.scrollY >= offsetTop) {
    document.body.style.paddingTop = `${offsetHeight}px`
    document.body.classList.add('fixed-nav')
  } else {
    document.body.style.paddingTop = 0
    document.body.classList.remove('fixed-nav')
  }
}

window.addEventListener('scroll', fixNav)
