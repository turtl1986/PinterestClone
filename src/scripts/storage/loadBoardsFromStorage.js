import { boards } from '../constants/index.js'
import { getDataLocalStorage } from './index.js'

export function loadBoardsFromStorage () {
  const allBoards = []
  for (const boardKey of boards) {
    const data = getDataLocalStorage(boardKey)
    allBoards.push(...data)
  }
  return allBoards
}
