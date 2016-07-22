'use strict'
import React from 'react'

export default function SearchResults(props){
  return(
     <div className="list-group">
       {Object.keys(props.shoot)
     .map((key,index)=>(

       <div className="card" key={key}>
           <img src="http://countryparrots.com/parrots/chad-parrot.gif" className="card-img-left"/>
           <div className="card-block">
             <h4 className="card-title">{props.shoot[key].borough}</h4>
             <h4 className="card-title">{props.shoot[key].eventid}</h4>
             <p className="card-text">{props.shoot[key].country}</p>
           </div>
       </div>

     ))
   }
     </div>
     )
}
