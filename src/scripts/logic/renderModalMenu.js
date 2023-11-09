import { createModalMenu } from '../components/index'
import { saveToLocalStorageToBoard, handlerCloseBtnForModal } from '../handlers/index.js'

const modalContainer = document.getElementById('modal-container')
const modal = document.createElement('div')
modal.className = 'modal'

const form = document.createElement('div')
form.id = 'form'

const closeModalBtn = document.createElement('button')
closeModalBtn.type = 'button'
closeModalBtn.className = 'modal__form-close'
closeModalBtn.textContent = 'X'

export function renderModalMenu (array) {
  form.innerHTML = ''
  for (let i = 0; i < array.length; i++) {
    const checkbox = createModalMenu(array[i], array[i])
    form.appendChild(checkbox)
  }
  modal.append(form, closeModalBtn)
  modalContainer.appendChild(modal)
  handlerCloseBtnForModal(closeModalBtn)
  form.addEventListener('change', function (event) {
    event.preventDefault()
    saveToLocalStorageToBoard(event)
    location.reload()
  })
}
