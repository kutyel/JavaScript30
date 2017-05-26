let countdown
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

const timer = secs => {
  clearInterval(countdown)
  const now = Date.now()
  const then = now + secs * 1000
  displayTime(secs)
  displayEndTime(then)

  countdown = setInterval(() => {
    const left = Math.round((then - Date.now()) / 1000)
    left <= 0 && clearInterval(countdown)
    displayTime(left)
  }, 1000)
}

const displayTime = secs => {
  const mins = Math.floor(secs / 60)
  const remainder = secs % 60
  const display = `${mins}:${remainder < 10 ? '0' : ''}${remainder}`
  timerDisplay.textContent = display
  document.title = display
}

const displayEndTime = stamp => {
  const end = new Date(stamp)
  const hours = end.getHours()
  const mins = end.getMinutes()
  endTime.textContent = `Be Back At ${hours}:${mins < 10 ? '0' : ''}${mins}`
}

function startTimer () {
  timer(+this.dataset.time)
}

function setMinutes (e) {
  e.preventDefault()
  const mins = this.minutes.value
  timer(mins * 60)
  this.reset()
}

buttons.forEach(b => b.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', setMinutes)
