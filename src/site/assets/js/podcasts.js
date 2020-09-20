'use strict'

const API_BASE_URL = 'https://us-central1-adamsuttin.cloudfunctions.net'
const SEARCH_BY_TERM_URL = `${API_BASE_URL}/pi-search-by-term`

const handleSearchByTermClick = () => {
  const formEl = document.querySelector('#search-byterm')
  const formData = new FormData(formEl)
  const data = {}
  for (let p of formData.entries()) {
    data[p[0]] = p[1]
  }
  console.log('Data', data)

  const resultsEl = document.querySelector('#search-results')

  while (resultsEl.firstChild) {
    resultsEl.removeChild(resultsEl.lastChild)
  }

  const req = fetch(SEARCH_BY_TERM_URL, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(payload => {
      const { data, error } = payload

      console.log('Payload', payload)

      if (!error && data && data.feeds) {
        
        if ( Array.isArray(data.feeds) && data.feeds.length > 0) { 
          const fragment = new DocumentFragment()
          data.feeds.forEach(f => {
            const li = document.createElement('li')
            const h6 = document.createElement('h6')
            h6.textContent = f.title
            li.appendChild(h6)
            fragment.appendChild(li)
          })
          resultsEl.appendChild(fragment)
        } else {
          const li = document.createElement('li')
          const p = document.createElement('p')
          p.textContent = 'No results'
          li.appendChild(p)
          resultsEl.appendChild(li)
        }

      } else {
        const li = document.createElement('li')
        li.textContent = error.message || 'Error getting results'
        resultsEl.appendChild(li)
      }
    })
    .catch(err => {
      console.error(err)
      const li = document.createElement('li')
      li.textContent = err.message || 'Error fetching results'
      resultsEl.appendChild(li)
    }) 
}