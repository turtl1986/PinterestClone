import { renderCardModal } from '../logic'
import { wrapper, root, body } from '../constants/constants.js'

export function addHandlersCards () {
  wrapper.addEventListener('click', function (event) {
    const modal = root.querySelector('#modal-container')
    if (event.target.classList.contains('card__functionality')) {
      renderCardModal(event)
      modal.style.display = 'block'
      body.style.overflow = 'hidden'
    }
  })
}
