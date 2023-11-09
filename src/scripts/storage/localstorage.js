export const getDataLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) ?? []
}
export const setDataLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}
