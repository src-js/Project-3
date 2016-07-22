let shoot1;
let shoot2;
let shoot3;
let latitude1;
let longitude1;
let latitude2;
let longitude2;
let latitude3;
let longitude3;
let map;

$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBsPh8XWJ2kNvzv2Fe1Cjz1E3Jpz0WKvPM&callback=initMap", function(){
  console.log("Script from Google loaded.");
});

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude1, lng: longitude1},
    zoom: 8
  });
};

function addressParse (inputAddress, inputBorough, inputZipCode) {
      let address       = inputAddress;
      let borough       = inputBorough;
      let zipCode       = inputZipCode;
      let zipArray      = zipCode.split(', ');
      let addressArray  = address.split(', ');
      let parsedAddress = addressArray[0];
      let filmLocation  = parsedAddress + ', ' + borough + ', NY ' + zipArray[0];

      return filmLocation;
};


function latLongAddress1 (thisShoot) {
  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    method: 'GET',
    data: {'address' : addressParse(thisShoot.parkingheld, thisShoot.borough, thisShoot.zipcode_s), 'key' : 'AIzaSyA4Bt3-KoRWpmLj2gCrN04Fed3mcZRYfKQ'},
    success: function(data){
      console.log('Latitude is: ' + data.results[0].geometry.location.lat + ' and longitude is: ' + data.results[0].geometry.location.lng);
      latitude1 = data.results[0].geometry.location.lat;
      longitude1 = data.results[0].geometry.location.lng;
    }
  });
};

function latLongAddress2 (thisShoot) {
  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    method: 'GET',
    data: {'address' : addressParse(thisShoot.parkingheld, thisShoot.borough, thisShoot.zipcode_s), 'key' : 'AIzaSyA4Bt3-KoRWpmLj2gCrN04Fed3mcZRYfKQ'},
    success: function(data){
      console.log('Latitude is: ' + data.results[0].geometry.location.lat + ' and longitude is: ' + data.results[0].geometry.location.lng);
      latitude2 = data.results[0].geometry.location.lat;
      longitude2 = data.results[0].geometry.location.lng;
    }
  });
};


function latLongAddress3 (thisShoot){
  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    method: 'GET',
    data: {'address' : addressParse(thisShoot.parkingheld, thisShoot.borough, thisShoot.zipcode_s), 'key' : 'AIzaSyA4Bt3-KoRWpmLj2gCrN04Fed3mcZRYfKQ'},
    success: function(data){
      console.log('Latitude is: ' + data.results[0].geometry.location.lat + ' and longitude is: ' + data.results[0].geometry.location.lng);
      latitude3 = data.results[0].geometry.location.lat;
      longitude3 = data.results[0].geometry.location.lng;
    }
  });
};

function getAddresses () {
  $.ajax({
      url: 'https://data.cityofnewyork.us/resource/6aka-uima.json',
      method: 'GET',
      dataType: 'json',
      data: {'subcategoryname' : 'Feature'},
      success: function(data){
        latLongAddress1(data[0]);
        latLongAddress2(data[1]);
        latLongAddress3(data[2]);
      },
      complete: function(){
        initMap();
      }
  });
};


getAddresses();







