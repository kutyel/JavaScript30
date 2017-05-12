const msg = new window.SpeechSynthesisUtterance()
let voices = []
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')

msg.text = document.querySelector('[name="text"]').value

function populateVoices () {
  voices = this.getVoices()
  voicesDropdown.innerHTML = voices
    .filter(({ lang }) => lang.includes('es'))
    .map(({ name, lang }) => `<option value="${name}">${name} (${lang})</option>`)
    .join('')
}

function setVoice () {
  msg.voice = voices.find(({ name }) => name === this.value)
  toggle()
}

function toggle (resume = true) {
  window.speechSynthesis.cancel()
  resume && window.speechSynthesis.speak(msg)
}

function setOption () {
  msg[this.name] = this.value
  toggle()
}

window.speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)
options.forEach(o => o.addEventListener('change', setOption))
speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', () => toggle(false))
