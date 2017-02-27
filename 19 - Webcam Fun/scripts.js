const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const ctx = canvas.getContext('2d')
const strip = document.querySelector('.strip')
const snap = document.querySelector('.snap')
const button = document.querySelector('#button')

const getVideo = () => navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(stream => {
    video.src = window.URL.createObjectURL(stream)
    video.play()
  })
  .catch(err => console.error(`ERROR: ${err}`))

const paintCanvas = () => {
  const width = video.videoWidth
  const height = video.videoHeight
  canvas.width = width
  canvas.height = height

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
    let pixels = ctx.getImageData(0, 0, width, height)

    // apply red filter
    // pixels = redEffect(pixels)
    // apply split RGB
    // pixels = rgbSplit(pixels)
    // apply ghost filter
    // ctx.globalAlpha = 0.1

    pixels = greenScreen(pixels)
    ctx.putImageData(pixels, 0, 0)
  }, 16)
}

const takePhoto = () => {
  snap.currentTime = 0
  snap.play()
  const data = canvas.toDataURL('image/jpeg')
  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download', 'handsome')
  link.innerHTML = `<img src="${data}" alt="Handsome" />`
  strip.insertBefore(link, strip.firstChild)
}

const redEffect = pixels => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100 // red
    pixels.data[i + 1] = pixels.data[i + 1] - 50  // green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5 // blue
  }
  return pixels
}

const rgbSplit = pixels => {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0] // red
    pixels.data[i + 100] = pixels.data[i + 1] // green
    pixels.data[i - 150] = pixels.data[i + 2] // blue
  }
  return pixels
}

const greenScreen = pixels => {
  const levels = {}

  document.querySelectorAll('.rgb input')
    .forEach(({ name, value }) => (levels[name] = value))

  for (let i = 0; i < pixels.data.length; i = i + 4) {
    let red = pixels.data[i + 0]
    let green = pixels.data[i + 1]
    let blue = pixels.data[i + 2]

    if (red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0
    }
  }

  return pixels
}

getVideo()

video.addEventListener('canplay', paintCanvas)
button.addEventListener('click', takePhoto)
