import { fetchData } from '../storage/api.js'
import { renderCards } from './index.js'

export const renderApiCards = () => {
  fetchData()
    .then(data => {
      renderCards(data)
    })
}
