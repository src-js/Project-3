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
             <h4 className="card-title">Borough: {props.shoot[key].borough}</h4>
             <h6 className="card-title">Location: {props.shoot[key].parkingheld}</h6>
             <h4 className="cart-title">{props.shoot[key].category}  shoot</h4>
             <h6 className="card-text">{props.shoot[key].startdatetime}</h6>
             <h6 className="card-text">to {props.shoot[key].enddatetime}</h6>
           </div>
       </div>

     ))
   }
     </div>
     )
}
