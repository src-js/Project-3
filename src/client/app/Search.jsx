'use strict'
import React from 'react';

export default function Search(props){
  const handleSubmit = event=>{
    event.preventDefault();
    const query = event.target.elements.zipcode_s.value;
    props.searchShoots(query);
    event.target.reset()
  }

  return(
    <section>
      <h3>Search By Zipcode</h3>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="zipcode_s" className="sr-only">Zipcode</label>
          <input type="text" className="form-control input lg" id="zipcode_s" placeholder="Zipcode"/>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">SEARCH</button>
      </form>
    </section>
  )

}
