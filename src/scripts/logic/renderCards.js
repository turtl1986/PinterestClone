import { createCard } from '../components/index'
import { addHandlersCards } from '../handlers/index.js'
import { wrapper } from '../constants/index.js'
import { loadComplainsFromStorage } from '../storage/index.js'

export function renderCards (array) {
  wrapper.innerHTML = ''
  const localStorageData = loadComplainsFromStorage()

  const filteredArray = array.filter(item => {
    return !localStorageData.some(data => data.id === item.id)
  })

  filteredArray.forEach(item => {
    const card = createCard(item)
    wrapper.appendChild(card)
  })

  addHandlersCards()
}
