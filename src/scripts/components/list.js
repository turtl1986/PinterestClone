import { root } from '../constants'
import { handlerFilter } from '../handlers'
export function createList (data) {
  const listDescription = new Set()
  const listItems = root.querySelector('.header__list')
  data.forEach(i => listDescription.add(i.description)
  )
  listDescription.forEach(i => {
    const listItem = document.createElement('button')
    listItem.className = 'header__item'
    listItem.textContent = i
    listItem.addEventListener('click', handlerFilter)
    listItems.append(listItem)
  })
}
