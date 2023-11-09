export const modalCard = document.createElement('div')
modalCard.className = 'card__modal'

const addToBoardButton = document.createElement('button')
addToBoardButton.textContent = 'Добавить на доску'
addToBoardButton.className = 'card__modal-add-content'
addToBoardButton.type = 'button'

const complainAboutCardButton = document.createElement('button')
complainAboutCardButton.textContent = 'Пожаловаться'
complainAboutCardButton.className = 'card__modal-complain-content'
complainAboutCardButton.type = 'button'

modalCard.append(addToBoardButton, complainAboutCardButton)
