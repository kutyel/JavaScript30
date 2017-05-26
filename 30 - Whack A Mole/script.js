const { floor, round, random } = Math
const holes = document.querySelectorAll('.hole')
const moles = document.querySelectorAll('.mole')
const scoreBoard = document.querySelector('.score')
const startButton = document.querySelector('.start')

let lastHole
let timeUp
let score

const randTime = (min, max) => round(random() * (max - min) + min)
const randHole = holes => {
  const index = floor(random() * holes.length)
  const hole = holes[index]
  if (hole === lastHole) {
    return randHole(holes)
  }
  lastHole = hole
  return hole
}

const peep = () => {
  const time = randTime(200, 1000)
  const hole = randHole(holes)
  hole.classList.add('up')
  setTimeout(() => {
    hole.classList.remove('up')
    !timeUp && peep()
  }, time)
}

const startGame = () => {
  scoreBoard.textContent = 0
  timeUp = false
  score = 0
  peep()
  setTimeout(() => (timeUp = true), 20000)
}

function bonk (e) {
  if (e.isTrusted) {
    score++
    this.parentNode.classList.remove('up')
    scoreBoard.textContent = score
  }
}

moles.forEach(m => m.addEventListener('click', bonk))
startButton.addEventListener('click', startGame)
