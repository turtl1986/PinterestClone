import { handlerDelete } from './handlerDelete.js'
import { updateStatistick } from '../logic'

export function addHandlerCardsBoard (card) {
  const BtnDelet = card.querySelector('.card__delet')

  BtnDelet.addEventListener('click', handlerDelete)
  BtnDelet.addEventListener('click', updateStatistick)
}
