import { fetchData } from '../storage'
import { renderCards } from '../logic'
export function handlerFilter (event) {
  const textItem = this.textContent
  fetchData().then(objects => {
    const resultArray = objects.filter(item => item.description.includes(textItem))
    return renderCards(resultArray)
  })
}
