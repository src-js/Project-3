'use strict'
//Help with adding to the DB from Mike Stenzler's Muvie Haus solution

const ajaxAdapter = {

  addToDb(query){
    console.log('Running addToDb');
    console.log('Query is: ' + query);
    return fetch('/db/?borough=' + query, {
      method: 'post'
    })
      // .then(r => r.json())
  },

  deleteFromDb(query){

  },

  updateToDb(query){

  },

  readFromDb(query){

  },

  searchShoots(query){
    console.log(query)
    return fetch('/api/?zipcode_s=' + query)
      .then(r => r.json())
  }


}

export default ajaxAdapter
