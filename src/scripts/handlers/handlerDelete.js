import { getDataLocalStorage, setDataLocalStorage } from '../storage'
import { renderCardsBoard } from '../logic'

export function handlerDelete (event) {
  const board = event.target.id
  const boardArr = getDataLocalStorage(`${board}`)
  const id = event.target.closest('.card').id
  boardArr.forEach((value, item, arr) => {
    if (arr[item].id === id) {
      arr.splice(item, 1)
    }
  }
  )
  setDataLocalStorage(`${board}`, boardArr)
  renderCardsBoard(getDataLocalStorage(`${board}`), board)
}
