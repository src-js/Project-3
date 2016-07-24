'use strict'
import React from 'react';

export default function SearchResults(props){

  const handleSubmit = event=>{
    event.preventDefault();
    const myBorough = event.target.elements.my_button.value;
    console.log(myBorough);
    props.addToDb(myBorough);
    event.target.reset()
  }

  return(
     <div className="list-group">
       {Object.keys(props.shoot).map((key,index)=>(
       <div className="card" key={key}>
           <img src="http://countryparrots.com/parrots/chad-parrot.gif" className="card-img-left"/>
           <div className="card-block">
             <h4 className="card-title">{props.shoot[key].borough}</h4>
             <h4 className="card-title">{props.shoot[key].eventid}</h4>
             <p className="card-text">{props.shoot[key].country}</p>
             <form className="form-inline" onSubmit={handleSubmit}>
                <input type="" className="form-control input lg" id="my_button" value={props.shoot[key].borough} />
                <button type="submit" className="btn btn-primary btn-lg">Save</button>
             </form>
            </div>
        </div>
      ))}
     </div>
  )
}
