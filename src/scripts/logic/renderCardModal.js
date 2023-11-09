import { modalCard } from '../components/index'
import { handlerModalCard } from '../handlers/index.js'
import { loadBoardsFromStorage } from '../storage/index.js'

const modalContainer = document.getElementById('modal-container')
export let currentCardId
export function renderCardModal (event) {
  modalContainer.innerHTML = ''
  modalContainer.appendChild(modalCard)
  const addButton = document.querySelector('.card__modal-add-content')
  const complainButton = document.querySelector('.card__modal-complain-content')
  addButton.addEventListener('click', function () {
    currentCardId = event.target.id
    handlerModalCard('add')
    modalCard.classList.add('hidden')
  })
  complainButton.addEventListener('click', function () {
    currentCardId = event.target.id
    const allDataFromBoards = loadBoardsFromStorage()
    const isCardInStorage = allDataFromBoards.some(item => item.id === currentCardId)
    if (isCardInStorage) {
      alert('Вы добавили эту карту себе в избранное,вы не можете пожаловаться!')
      location.reload()
    } else {
      handlerModalCard('complain')
      modalCard.classList.add('hidden')
    }
  })
}
