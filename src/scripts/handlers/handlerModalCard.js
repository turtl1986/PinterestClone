import { complains, boards } from '../constants/index.js'
import { renderModalMenu } from '../logic/index.js'

export function handlerModalCard (button, buttonId) {
  if (button === 'add') {
    renderModalMenu(boards, buttonId)
  } else if (button === 'complain') {
    renderModalMenu(complains, buttonId)
  }
}
