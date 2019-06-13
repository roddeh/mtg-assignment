const SERVICE_BASE = 'https://api.magicthegathering.io/v1/'
const PAGE_SIZE = 20

function encodeQueryParams(o){
  let params = []
  for(let key in o){
    let val = o[key]
    if(Array.isArray(val)){
      val = val.join('|')
    }
    if(val !== undefined && val !== null && val !== ''){
      params.push(key + '=' + encodeURIComponent(val))  
    }
  }
  return params.join('&')
}


const service = {
  cards({offset, types = [], foo = 'bar'} = {}){
    let page = Math.floor(offset / PAGE_SIZE) + 1
    let query = encodeQueryParams({types, page, pageSize:PAGE_SIZE})

    // return fetch('./cards-creatures.json')
    return fetch(SERVICE_BASE + 'cards?' + query)
      .then((response) => response.json())
      .then((data) => {
        // It seems that there are sometimes 'duplicate' cards but the dupe doesn't have an imageUrl.
        // Let's filter those out.
        // Note, this will potentially confuse the view logic when we are expecting a complete 'page'.
        // To prevent the confusion we will keep track of the 'filterCount' to assist in pagination
        let filterCount = 0
        let cards = data.cards.filter((card) => {
          if(card.imageUrl === undefined){
            filterCount++
            return false
          }
          return true
        })
        cards.filterCount = filterCount
        return cards
      })
      .catch((error) => {
        console.log('error loading cards',)
        return []
      })
  }
}

export default service