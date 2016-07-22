import React from 'react'
import ReactDOM from 'react-dom'
import Map, {Marker} from 'google-maps-react'
import google from 'google-maps-react'
import {InfoWindow} from 'google-maps-infobox'

export class App extends React.Component {
  constructor(){

  }

  render() {
    return (
      <div>
        <Map google={window.google} center: {{lat: -34.397, lng: 150.644}} zoom={14}>

        <Marker onClick={this.onMarkerClick} name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
        </InfoWindow>
        </Map>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#container'))

