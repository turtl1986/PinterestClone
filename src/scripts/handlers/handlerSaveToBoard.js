import { getDataLocalStorage, setDataLocalStorage } from '../storage/localstorage'
import { currentCardId } from '../logic/index.js'

export function saveToLocalStorageToBoard (event) {
  event.preventDefault()
  const checkboxValue = event.target.id
  const existingData = getDataLocalStorage(checkboxValue)
  const card = document.getElementById(currentCardId)
  const cardImg = card.querySelector('img').getAttribute('src')
  const cardAuthorAvatar = card.querySelector('.card__author-avatar').getAttribute('src')
  const cardAuthorName = card.querySelector('.card__author-name').textContent
  const cardDesc = card.querySelector('.card__desc').textContent
  const cardObj = {
    id: currentCardId,
    image: cardImg,
    avatar: cardAuthorAvatar,
    author_name: cardAuthorName,
    description: cardDesc
  }
  if (existingData) {
    if (!existingData.some(item => item.id === cardObj.id)) {
      existingData.push(cardObj)
      setDataLocalStorage(checkboxValue, existingData)
    } else {
      alert('Ранее вы уже отмечали эту карточку')
    }
  }
}
