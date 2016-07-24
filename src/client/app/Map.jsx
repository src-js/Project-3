//This is taken almost verbatim from here: https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/#the-map-component

import React from 'react';


export class Map extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 40.712784;
      let lng = -74.005941;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
  }

  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
  }
}


export default Map;
