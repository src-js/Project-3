$( document ).ready(function() {

  let myAddress = 'France';


  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    method: 'GET',
    data: {'address' : myAddress, 'key' : 'AIzaSyA4Bt3-KoRWpmLj2gCrN04Fed3mcZRYfKQ'},
    success: function(data){
      console.log('Latitude is: ' + data.results[0].geometry.location.lat + ' and longitude is: ' + data.results[0].geometry.location.lng);
    }
  });


});
