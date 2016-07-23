'use strict'
import React from 'react'

export default function SearchResults(props){

  const handleSubmit = event => {
    event.preventDefault();

    const newLocation = {
      location: props.shoot[key].parkingheld,
      borough: props.shoot[key].borough,
      category: props.shoot[key].category,
      subCategory: props.shoot[key].subcategoryname
    }

    props.addLocation(newLocation);

    event.target.reset();
  }
  return(
     <div className="list-group">
       {Object.keys(props.shoot)
     .map((key,index)=>(

       <div className="card" key={key}>
           <img src="http://countryparrots.com/parrots/chad-parrot.gif" className="card-img-left"/>
           <div className="card-block">
             <h4 className="card-title" name="borough">Borough: {props.shoot[key].borough}</h4>
             <h6 className="card-title" name="location">Location: {props.shoot[key].parkingheld}</h6>
             <h4 className="cart-title" name="category">{props.shoot[key].category}  shoot</h4>
             <h6 className="card-text" name="startDate">{props.shoot[key].startdatetime}</h6>
             <h6 className="card-text" name="endDate">to {props.shoot[key].enddatetime}</h6>
             <h6 className="card-text" name="subCategory">to {props.shoot[key].subcategoryname}</h6>
             <button className="btn btn-primary btn-lg" type="submit" onSubmit={handleSubmit}>Add</button>
           </div>
       </div>

     ))
   }
     </div>
     )
}
