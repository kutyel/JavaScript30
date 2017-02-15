const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

let direction = true
let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0

const updatePosition = e => ([lastX, lastY] = [e.offsetX, e.offsetY])

const draw = e => {
  if (isDrawing) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    updatePosition(e)
    hue++
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction
    }
    direction ? ctx.lineWidth++ : ctx.lineWidth--
  }
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => (isDrawing = false))
canvas.addEventListener('mouseout', () => (isDrawing = false))
canvas.addEventListener('mousedown', e => {
  isDrawing = true
  updatePosition(e)
})
