'use strict'
import React from 'react'
import load from '../helpers/load'
import initMap from '../helpers/initMap'
// const auth = require('../auth');

const GoogleMap = React.createClass({
  // initMap: function(){
  //   map = new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: nycLat, lng: nycLong},
  //   zoom: 10
  // })},

  componentDidMount : function() {
    load.initMap("https://maps.googleapis.com/maps/api/js?key=AIzaSyBsPh8XWJ2kNvzv2Fe1Cjz1E3Jpz0WKvPM&libraries=places&callback=initMap");
  },

  componentWillMount : function() {
    // moved deleteScript function from here
  },
  render : function() {
    return (
      <div>
        <div id="map">
        </div>
      </div>
    )
  }
});


module.exports = GoogleMap;
