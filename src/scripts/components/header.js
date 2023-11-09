export function createHeader () {
  const header = document.createElement('header')
  header.className = 'header'
  const container = document.createElement('div')
  container.className = 'container'
  container.classList.add('header__container')
  const headerLogo = document.createElement('div')
  headerLogo.className = 'header__logo'
  const headerLogoHome = document.createElement('a')
  headerLogoHome.className = 'header__logo-link'
  headerLogoHome.href = ''
  const headerIcon = document.createElement('img')
  headerIcon.className = 'header__logo-img'
  headerIcon.alt = ''
  headerIcon.src = './assets/pinterest_logo.svg'
  const headerSearch = document.createElement('div')
  const headerSearchInput = document.createElement('input')
  headerSearch.className = 'header__search'
  headerSearchInput.className = 'header__search-input'
  headerSearchInput.type = 'search'
  headerSearchInput.placeholder = 'search...'
  const headerlist = document.createElement('ul')
  headerlist.className = 'header__list'
  const headerMenu = document.createElement('div')
  headerMenu.className = 'header__menu'

  const headerLabel = document.createElement('button')
  headerLabel.className = 'header__menu-btn'
  headerLabel.textContent = 'мои доски'

  const headerMenuSelect = document.createElement('ul')
  headerMenuSelect.className = 'header__menu-list'

  const headerBoardBtn1 = document.createElement('button')
  headerBoardBtn1.className = 'header__menu-item'
  headerBoardBtn1.textContent = 'Доска 1'
  headerBoardBtn1.id = 'board1'

  const headerBoardBtn2 = document.createElement('button')
  headerBoardBtn2.className = 'header__menu-item'
  headerBoardBtn2.textContent = 'Доска 2'
  headerBoardBtn2.id = 'board2'

  const headerBoardBtn3 = document.createElement('button')
  headerBoardBtn3.className = 'header__menu-item'
  headerBoardBtn3.textContent = 'Доска 3'
  headerBoardBtn3.id = 'board3'

  headerMenuSelect.append(headerBoardBtn1, headerBoardBtn2, headerBoardBtn3)
  headerMenu.append(headerLabel, headerMenuSelect)
  headerLogoHome.append(headerIcon)
  headerLogo.append(headerLogoHome)
  headerSearch.append(headerSearchInput, headerlist)
  container.append(headerLogo, headerSearch, headerMenu)
  header.append(container)
  return header
}
