export function createCardsBoard (obj, board) {
  const card = document.createElement('div')
  card.className = 'card'
  card.id = obj.id

  const cardImg = document.createElement('img')
  cardImg.className = 'card__img'
  cardImg.src = obj.image
  cardImg.alt = obj.description

  const cardAuthorDescription = document.createElement('div')
  cardAuthorDescription.className = 'card__author'

  const cardAvatar = document.createElement('img')
  cardAvatar.className = 'card__author-avatar'
  cardAvatar.src = obj.avatar
  cardAvatar.alt = 'avatar'

  const cardAuthorName = document.createElement('p')
  cardAuthorName.className = 'card__author-name'
  cardAuthorName.textContent = obj.author_name

  const cardSpecification = document.createElement('div')
  cardSpecification.className = 'card__about-desc'

  const cardDescription = document.createElement('p')
  cardDescription.className = 'card__desc'
  cardDescription.textContent = obj.description

  const btnCardFunctionality = document.createElement('button')
  btnCardFunctionality.textContent = 'удалить с доски'
  btnCardFunctionality.className = 'card__delet'
  btnCardFunctionality.id = board

  cardAuthorDescription.append(cardAvatar, cardAuthorName)
  cardSpecification.append(cardDescription, btnCardFunctionality)
  card.append(cardImg, cardAuthorDescription, cardSpecification)
  return card
}
