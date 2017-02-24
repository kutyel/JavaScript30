const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
]

const strip = name => name.replace(/^(a|the|an)\s/i, '').trim()

const sortedBands = bands.sort((x, y) => strip(x) > strip(y) ? 1 : -1)

document.querySelector('#bands').innerHTML = sortedBands
  .map(band => `<li>${band}</li>`).join('')
