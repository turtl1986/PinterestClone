import { renderCards } from './logic/index.js'
import { root, wrapper } from './constants/index.js'
import { createHeader, createList } from './components/index.js'
import { addHandlerHeader } from './handlers/addHandlersHeader.js'
import { fetchData } from './storage/api.js'

function initPinterest () {
  root.prepend(createHeader())
  addHandlerHeader()
  root.append(wrapper)
  fetchData().then(data => {
    renderCards(data)
    createList(data)
  })
}

export { initPinterest }
