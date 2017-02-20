function debounce (func, wait = 20, immediate = true) {
  let timeout
  return function () {
    let context = this
    let args = arguments
    let later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

const images = Array.from(document.querySelectorAll('.slide-in'))

const checkSlide = () => {
  images.forEach(img => {
    const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2
    const imgBottom = img.offsetTop + img.height
    const isHalfShown = slideInAt > img.offsetTop
    const isNotScroll = window.scrollY < imgBottom
    img.classList[isHalfShown && isNotScroll ? 'add' : 'remove']('active')
  })
}

window.addEventListener('scroll', debounce(checkSlide))
