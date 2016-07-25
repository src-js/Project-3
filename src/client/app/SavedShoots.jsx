'use strict'
import React from 'react'

export default function VisitedLocations(props){

  const clickDelete = key => event => {
    event.stopPropagation();
    props.deleteLocation(key);
  }

  return(
    <div>
      <h3>Visited Locations</h3>
      {Object.keys(props.visited)
      .map(key=>(
        <div key={key}>
          <p>
            • {props.visited[key].address}
            <button type="button" className="btn btn-danger" key={key} onClick={clickDelete}>Delete
            </button>
          </p>
        </div>
        ))}

    </div>
  )
}

export default VisitedLocations;
