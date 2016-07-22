import React from 'react'
import Map from 'google-maps-react'

export default class GoogleMap extends React.Component {

  static propTypes(){
    center: {lat: 50, lng: 100},
    zoom: 9
  }

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          center={{lat:'50', lng:'50'}}
          style={{width:'80vw', height:'80vh'}}/>
      </div>
    )
  }
}
