'use strict'
import React from 'react'

export default function VisitedLocations(props){

  const clickDelete = key => event => {
    event.stopPropagation();
    props.deleteLocation(key);
    console.log(key)
  }

  return(
    <div>
      <h3>Visited Locations</h3>
      {Object.keys(props.visited)
      .map(key=>(
        <div key={key}>
          <p>• {props.visited[key].address}</p>
          <button type="button" className="btn btn-danger" key={key} onClick={clickDelete({key})}>Delete
          </button>
          <br/>
          <br/>
        </div>
        ))}

    </div>
  )
}

export default VisitedLocations;
