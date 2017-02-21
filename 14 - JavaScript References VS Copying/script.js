// start with strings, numbers and booleans
let age = 25
let age2 = age
console.log(age, age2)
age = 26
console.log(age, age2)
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']
// and we want to make a copy of it.
const team = players
// You might think we can just do something like this:
team[3] = 'Lux'
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice()
const team3 = [].concat(players)
// one day
// or create a new array and concat the old one in

// or use the new ES6 Spread
const team4 = [...players]
const team5 = Array.from(players)
// now when we update it, the original one isn't changed
console.log(team2, team3, team4, team5)

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Flavio',
  age: 25,
  social: {
    twitter: '@FlavioCorpa'
  }
}
// and think we make a copy:
const captain = person
captain.number = 99
// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 })
// We will hopefully soon see the object ...spread
const cap3 = { ...person }
// Things to note - this is only 1 level deep - both for Arrays and Objects.
// (lodash has a cloneDeep method, but you should think twice before using it).
const poorCopy = JSON.parse(JSON.stringify(person))
console.log(cap2, cap3, poorCopy)
