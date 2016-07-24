$( document ).ready(function() {

  let myZipCode      = '10038';
  let tempZipArray   = [];
  let myZips         = [];

  $.ajax({
    url: 'https://data.cityofnewyork.us/resource/6aka-uima.json',
    method: 'GET',
    dataType: 'json',
    data: {'subcategoryname' : 'Feature'},
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
        if (myZips.includes(data[i].zipcode_s)) {
          console.log(data[i]);
        }
      }
    }
  });
});
