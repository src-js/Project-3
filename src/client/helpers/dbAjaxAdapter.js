const dbAjaxAdapter = {

  constructor(fetch){
    if(!fetch) throw "We need the Fetch library!";
  },

  getLocations(){
    return fetch('/visited')
      .then( r=>r.json() )
  },

  createLocation(newLocation){
    return fetch('/visited', {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(newLocation)
    })
    .then( r=> r.json() )
  },

  deleteLocation(id){
    return fetch(`/visited/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(id)
    })
    .then( r=> r.json() )
  }
}

export default dbAjaxAdapter;
