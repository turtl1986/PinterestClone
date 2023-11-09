import { getDataLocalStorage } from '../storage/index.js'
import { root } from '../constants'

export function updateStatistick (event) {
  const board = event.target.id
  const boardArr = getDataLocalStorage(`${board}`)
  const counterBoard = root.querySelector('.nav__counter-board')
  counterBoard.innerText = `Все: ${boardArr.length}`
}
