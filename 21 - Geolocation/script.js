const arrow = document.querySelector('.arrow')
const kmh = document.querySelector('.speed-value')

window.navigator.geolocation.watchPosition(({ coords: { speed, heading } }) => {
  kmh.textContent = speed
  arrow.style.transform = `rotate(${heading}deg)`
}, err => console.error(err))
