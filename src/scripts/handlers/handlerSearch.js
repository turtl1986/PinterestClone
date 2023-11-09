import { renderCards } from '../logic/index.js'
import { fetchData } from '../storage/index.js'
import { debounce } from 'lodash'

export const debouncedHandle = debounce(handlerSearch, 2000)
function handlerSearch ({ target }) {
  fetchData().then(obj => {
    const searchList = obj.filter(item => item.description.toLowerCase().includes(target.value.toLowerCase()))
    return renderCards(searchList)
  })
}
