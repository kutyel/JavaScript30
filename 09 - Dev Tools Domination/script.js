const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 }
]

function makeGreen () {
  const p = document.querySelector('p')
  p.style.color = '#BADA55'
  p.style.fontSize = '50px'
}

const p = document.querySelector('p')
p.addEventListener('click', makeGreen)

// Regular
console.log('Hello World!')

// Interpolated
console.log('This is a list %s strings', 'of')

// Styled
console.log('%c Operator Mono', 'font-family: "Operator Mono"')

// warning!
console.warn('This is a warning!')

// Error :|
console.error('Something went wrong...')

// Info
console.info('Crocodiles eat 3-4 people per year')

// Testing
console.assert(1 === 2, '1 is not equal to 2')

// clearing
console.clear()

// Viewing DOM Elements
console.dir(p)

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(dog.name)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`${dog.name} is ${dog.age * 7} dog years`)
  console.groupEnd(dog.name)
})

// counting
console.count('Flavio')
console.count('Flavio')
console.count('Flavio')

// timing
const key = 'fetch from GitHub!'
console.time(key)
window.fetch('https://api.github.com/users/kutyel')
  .then(response => response.json())
  .then(data => {
    console.timeEnd(key)
    console.log(data)
  })
