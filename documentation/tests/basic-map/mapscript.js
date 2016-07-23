var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.227638, lng: 2.213749},
    zoom: 8
  });
}
