const template = document.querySelector('#template')

export function createCard (obj) {
  const card = template.content.cloneNode(true)
  card.querySelector('.card').id = obj.id
  card.querySelector('.card__img').src = obj.image
  card.querySelector('.card__img').alt = ''
  card.querySelector('.card__functionality').textContent = '...'
  card.querySelector('.card__functionality').id = obj.id
  card.querySelector('.card__author-avatar').src = obj.avatar
  card.querySelector('.card__author-avatar').alt = ''
  card.querySelector('.card__author-name').textContent = obj.name_author
  card.querySelector('.card__desc').textContent = obj.description
  return card
}
