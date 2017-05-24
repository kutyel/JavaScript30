const speed = document.querySelector('.speed')
const bar = speed.querySelector('.speed-bar')
const video = document.querySelector('.flex')

speed.addEventListener('mousemove', function ({ pageY }) {
  const y = pageY - this.offsetTop
  const percent = y / this.offsetHeight
  const [min, max] = [0.4, 4]
  const height = Math.round(percent * 100) + '%'
  const playbackRate = percent * (max - min) + min
  bar.style.height = height
  bar.textContent = playbackRate.toFixed(2) + '×'
  video.playbackRate = playbackRate
})
