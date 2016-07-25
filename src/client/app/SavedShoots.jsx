'use strict'
import React from 'react'

export default function VisitedLocations(props){
  return(
    <div>
    <h3>Visited Locations</h3>
      {Object.keys(props.visited)
             .map(key=>(
                <div key={key}>
                  <p>• {props.visited[key].address}</p>
                  <p></p>
                </div>
              ))}
    </div>
  )
}

export default VisitedLocations;
