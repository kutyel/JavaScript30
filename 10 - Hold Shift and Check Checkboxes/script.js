const checks = Array.from(document.querySelectorAll('input[type="checkbox"]'))

let lastChecked

function handleCheck (e) {
  let inBetween = false
  if (e.shiftKey && this.checked) {
    checks.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
      }
      if (inBetween) {
        checkbox.checked = true
      }
    })
  }
  lastChecked = this
}

checks.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
