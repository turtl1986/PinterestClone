import { debouncedHandle, handlerChoseBoadr, handlerCloseMenu } from './index.js'

export function addHandlerHeader () {
  const header = document.querySelector('.header')
  const headerSearchInput = header.querySelector('.header__search-input')
  headerSearchInput.addEventListener('input', debouncedHandle)
  headerSearchInput.addEventListener('click', function (event) {
    const headerList = header.querySelector('.header__list')
    headerList.classList.toggle('show')
  })
  const headerBoard = header.querySelector('.header__menu-btn')
  headerBoard.addEventListener('click', function (event) {
    const headermenuselect = header.querySelector('.header__menu-list')
    headermenuselect.classList.toggle('show')
  })

  const headerBoard1 = header.querySelector('#board1')
  headerBoard1.addEventListener('click', handlerChoseBoadr)
  headerBoard1.addEventListener('click', handlerCloseMenu)

  const headerBoard2 = header.querySelector('#board2')
  headerBoard2.addEventListener('click', handlerChoseBoadr)
  headerBoard1.addEventListener('click', handlerCloseMenu)

  const headerBoard3 = header.querySelector('#board3')
  headerBoard3.addEventListener('click', handlerChoseBoadr)
  headerBoard1.addEventListener('click', handlerCloseMenu)
}
