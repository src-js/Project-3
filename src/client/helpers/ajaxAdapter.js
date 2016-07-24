'use strict'
//Help with adding to the DB from Mike Stenzler's Muvie Haus solution

const ajaxAdapter = {

  searchShoots(query){
    console.log(query)
    return fetch('/api/?zipcode_s=' + query)
      .then(r => r.json())
  }

}

export default ajaxAdapter
