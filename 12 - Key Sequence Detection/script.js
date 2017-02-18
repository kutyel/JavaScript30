const pressed = []
const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'a',
  'b',
  'Enter'
]

const tdfw = () => {
  const script = document.createElement('script')
  script.setAttribute('src', 'https://nthitz.github.io/turndownforwhatjs/tdfw.js')
  document.body.appendChild(script)
}

window.addEventListener('keyup', ({ key }) => {
  pressed.push(key)
  pressed.splice(-KONAMI_CODE.length - 1, pressed.length - KONAMI_CODE.length)
  pressed.join().includes(KONAMI_CODE.join()) && tdfw()
})
