import { wrapper } from '../constants'
import { createCardsBoard } from '../components/index'
import { addHandlerCardsBoard } from '../handlers'

export function renderCardsBoard (boardArr, board) {
  wrapper.innerHTML = ''
  boardArr.forEach(item => {
    const card = createCardsBoard(item, board)
    addHandlerCardsBoard(card)
    wrapper.append(card)
  })
}
