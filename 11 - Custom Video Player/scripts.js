/**
 * Elements
 */
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullscreen = player.querySelector('.fullscreen')

/**
 * Events
 */
const togglePlay = () => video[video.paused ? 'play' : 'pause']()

function updateButton () {
  toggle.innerHTML = `<i class="material-icons">${this.paused ? 'play_arrow' : 'pause'}</i>`
}

function skip () {
  video.currentTime += +this.dataset.skip
}

function handleRange () {
  video[this.name] = this.value
}

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

const scrub = (e) => {
  const time = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = time
}

const goFullscreen = () => video.webkitRequestFullscreen()

/**
 * Listeners
 */
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)
skipButtons.forEach(b => b.addEventListener('click', skip))
ranges.forEach(r => {
  r.addEventListener('change', handleRange)
  r.addEventListener('mousemove', handleRange)
})

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', e => mousedown && scrub(e))
progress.addEventListener('mousedown', () => (mousedown = true))
progress.addEventListener('mouseup', () => (mousedown = false))
fullscreen.addEventListener('click', goFullscreen)
