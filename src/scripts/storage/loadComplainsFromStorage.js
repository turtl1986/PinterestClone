import { complains } from '../constants/index.js'
import { getDataLocalStorage } from './index.js'

export function loadComplainsFromStorage () {
  const allComplains = []
  for (const complainKey of complains) {
    const data = getDataLocalStorage(complainKey)
    allComplains.push(...data)
  }
  return allComplains
}
