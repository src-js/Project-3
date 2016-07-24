//I followed the tutorial from the Google Geocoding API and Google Maps API, including using some sample code there as a template.

let latitude1;
let longitude1;
let latitude2;
let longitude2;
let latitude3;
let longitude3;
let map;

let myZipCode      = 11203;
let tempZipArray   = [];
let myZips         = [];
let counter        = 0;

//nycLat and nycLong just found by doing a manual Google Maps search so we don't burn through too many API calls
let nycLat  = 40.712784;
let nycLong = -74.005941;


//initMap is taken almost verbatim from the Google Maps API documentation.
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: nycLat, lng: nycLong},
    zoom: 10
  });
};

//The following script is created by Google as part of their Google Maps API.
$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBsPh8XWJ2kNvzv2Fe1Cjz1E3Jpz0WKvPM&callback=initMap", function(){
  console.log("Script from Google loaded.");
});

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
      latitude1 = data.results[0].geometry.location.lat;
      longitude1 = data.results[0].geometry.location.lng;
      //Marker code taken from Google Maps API documentation
      let marker1 = new google.maps.Marker({
        position: {lat: latitude1, lng: longitude1},
        map: map,
        title: 'Marker1'
      })
    }
  });
};

function latLongAddress2 (thisShoot) {
  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    method: 'GET',
    data: {'address' : addressParse(thisShoot.parkingheld, thisShoot.borough, thisShoot.zipcode_s), 'key' : 'AIzaSyA4Bt3-KoRWpmLj2gCrN04Fed3mcZRYfKQ'},
    success: function(data){
      latitude2 = data.results[0].geometry.location.lat;
      longitude2 = data.results[0].geometry.location.lng;
      //Marker code taken from Google Maps API documentation
      let marker2 = new google.maps.Marker({
        position: {lat: latitude2, lng: longitude2},
        map: map,
        title: 'Marker2'
      })
    }
  });
};


function latLongAddress3 (thisShoot){
  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    method: 'GET',
    data: {'address' : addressParse(thisShoot.parkingheld, thisShoot.borough, thisShoot.zipcode_s), 'key' : 'AIzaSyA4Bt3-KoRWpmLj2gCrN04Fed3mcZRYfKQ'},
    success: function(data){
      latitude3 = data.results[0].geometry.location.lat;
      longitude3 = data.results[0].geometry.location.lng;
      //Marker code taken from Google Maps API documentation
      let marker3 = new google.maps.Marker({
        position: {lat: latitude3, lng: longitude3},
        map: map,
        title: 'Marker3'
      })
    }
  });
};


function getZip () {
   $.ajax({
    url: 'https://data.cityofnewyork.us/resource/6aka-uima.json',
    method: 'GET',
    dataType: 'json',
    data: {'subcategoryname' : 'Feature', 'zipcode_s' : myZipCode},
    success: function(data){
      for (let i in data) {
        tempZipArray.push(data[i].zipcode_s);
      };
      for (let i in tempZipArray) {
        if (tempZipArray[i].includes(myZipCode)) {
          myZips.push(tempZipArray[i]);
        }
      };
      for (let i in data) {
        if ((counter < 3) && (myZips.includes(data[i].zipcode_s))) {
          counter += 1;
          if (counter === 1) {
            latLongAddress1(data[i]);
          } else if (counter === 2) {
            latLongAddress2(data[i]);
          } else if (counter === 3) {
            latLongAddress1(data[i]);
          };
        } else if (counter >= 1) {
          console.log('All markers added')
          return;
        } else {
          console.log('Zip code error');
          return;
        }
      }
    }
  })
};

getZip();







