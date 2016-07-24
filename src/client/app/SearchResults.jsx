'use strict'
import React from 'react';

export default function SearchResults(props){

    const handleSubmit = event => {

    const newLocation = {
      location: props.shoot[event.target.value].parkingheld,
      borough: props.shoot[event.target.value].borough,
      category: props.shoot[event.target.value].category,
      subCategory: props.shoot[event.target.value].subcategoryname
    }
    props.addLocation(newLocation);
  }

  return(
     <div className="list-group">
       {Object.keys(props.shoot).map((key,index)=>(
       <div className="card" key={key}>
           <img src="http://countryparrots.com/parrots/chad-parrot.gif" className="card-img-left"/>
           <div className="card-block">
             <h4 className="card-title" name="borough">Borough: {props.shoot[key].borough}</h4>
             <h6 className="card-title" name="location">Location: {props.shoot[key].parkingheld}</h6>
             <h4 className="cart-title" name="category">{props.shoot[key].category}  shoot</h4>
             <h6 className="card-text" name="startDate">{props.shoot[key].startdatetime}</h6>
             <h6 className="card-text" name="endDate">to {props.shoot[key].enddatetime}</h6>
             <h6 className="card-text" name="subCategory">to {props.shoot[key].subcategoryname}</h6>
             <button className="btn btn-primary btn-lg" value={key} onClick={handleSubmit}>Add</button>
           </div>
       </div>

     ))
  }
     </div>
  )
}
