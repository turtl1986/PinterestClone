export function handlerSelectCheckbox (event) {
  const inputs = document.querySelectorAll('.modal__form-checboxes-input')
  inputs.forEach(function (checkbox) {
    if (checkbox !== event.target) {
      checkbox.checked = false
    }
  })
}
