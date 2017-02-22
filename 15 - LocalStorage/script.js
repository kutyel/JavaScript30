const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(window.localStorage.getItem('items')) || []

function addItem (e) {
  e.preventDefault()
  const item = {
    text: this.querySelector('[name=item]').value,
    done: false
  }
  items.push(item)
  renderList(items, itemsList)
  window.localStorage.setItem('items', JSON.stringify(items))
  this.reset()
}

const renderList = (plates = [], platesList) => {
  platesList.innerHTML = plates.map((plate, i) => `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done && 'checked'} />
      <label for="item${i}">${plate.text}</label>
    </li>
  `).join('')
}

const toggleDone = e => {
  if (e.target.matches('input')) {
    const index = e.target.dataset.index
    items[index].done = !items[index].done
    renderList(items, itemsList)
    window.localStorage.setItem('items', JSON.stringify(items))
  }
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)

renderList(items, itemsList)
