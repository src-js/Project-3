'use strict'

const ajaxAdapter = {
  searchShoots(query){
    console.log(query)
    return fetch('/api/?eventid=' + query)
      .then(response => {
        // JSON.stringify(response)
        console.log(JSON.stringify(response))
      })
  }
}

export default ajaxAdapter
