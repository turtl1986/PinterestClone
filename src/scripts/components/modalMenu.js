import { handlerSelectCheckbox } from '../handlers/index.js'

const modalMenu = document.createElement('form')
modalMenu.className = 'modal__form-checkboxes'

export function createModalMenu (labelText, id) {
  const input = document.createElement('input')
  input.type = 'checkbox'
  input.className = 'modal__form-checboxes-input'
  input.id = id

  const label = document.createElement('label')
  label.textContent = labelText
  label.className = 'modal__form-checboxes-label'
  label.htmlFor = id
  input.addEventListener('change', handlerSelectCheckbox)
  modalMenu.append(input, label)
  return modalMenu
}
