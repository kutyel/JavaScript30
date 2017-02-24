const totalSeconds = Array.from(document.querySelectorAll('[data-time]'))
  .reduce((total, { dataset: { time } }) => {
    const [mins, secs] = time.split(':').map(parseFloat)
    return total + (mins * 60) + secs
  }, 0)

const hours = Math.floor(totalSeconds / 3600)
const secondsMinusHours = totalSeconds % 3600
const mins = Math.floor(secondsMinusHours / 60)
const seconds = secondsMinusHours % 60

console.log(`Total time: ${hours}h ${mins}min ${seconds}s`)
