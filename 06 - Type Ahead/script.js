const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

window.fetch(endpoint)
  .then(res => res.json())
  .then(data => cities.push(...data))

const findMatches = (filter, cities) =>
  cities.filter(place => {
    const regex = new RegExp(filter, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })

const formatNumber = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

function displayResults () {
  suggestions.innerHTML = findMatches(this.value, cities)
    .map(place => {
      const regex = new RegExp(this.value, 'gi')
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
      const cityState = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
      return `
        <li>
          <span class="name">${cityName}, ${cityState}</span>
          <span class="population">${formatNumber(place.population)}</span>
        </li>
      `
    }).join('')
}

const search = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

search.addEventListener('keyup', displayResults)
