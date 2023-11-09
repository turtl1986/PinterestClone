export function handlerCloseMenu (event) {
  if (!event.target.matches('.header__menu-btn')) {
    const menuList = document.querySelector('.header__menu-list')
    if (menuList.classList.contains('show')) {
      menuList.classList.remove('show')
    }
  }
}
