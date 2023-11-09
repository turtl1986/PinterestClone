export function createNavBoard (value, board) {
  const nav = document.createElement('div')
  nav.className = 'nav'

  const nameBoard = document.createElement('p')
  nameBoard.className = 'nav__name-board'
  nameBoard.textContent = board

  const counterBoard = document.createElement('p')
  counterBoard.className = 'nav__counter-board'
  counterBoard.textContent = `Все:${value.length}`
  nav.append(nameBoard, counterBoard)
  return nav
}
