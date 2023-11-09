import { getDataLocalStorage } from '../storage'
import { createNavBoard, createHeader } from '../components/index'
import { wrapper, root } from '../constants'
import { renderCardsBoard } from '../logic'
import { addHandlerHeader } from '../handlers'

export function handlerChoseBoadr (event) {
  root.innerHTML = ''
  const board = event.target.innerHTML
  const boardArr = getDataLocalStorage(`${board}`)
  root.prepend(createHeader())
  addHandlerHeader()
  root.append(createNavBoard(boardArr, board))
  root.append(wrapper)
  renderCardsBoard(boardArr, board)
}
