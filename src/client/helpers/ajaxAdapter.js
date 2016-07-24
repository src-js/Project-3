'use strict'

const ajaxAdapter = {
  searchShoots(query){
    console.log(query)
    return fetch('/api/?zipcode_s=' + query)
      .then(r => r.json())
  }
}

export default ajaxAdapter
