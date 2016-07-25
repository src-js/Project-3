let address = 'RIVERSIDE DRIVE between WEST  153 STREET and WEST  155 STREET,  WEST  157 STREET between RIVERSIDE DRIVE and EDWARD M MORGAN PLACE,  WEST  155 STREET between BROADWAY and AMSTERDAM AVENUE,  RIVERSIDE DRIVE between WEST  157 STREET and WEST  158 STREET,  EDWARD M MORGAN PLACE between WEST  157 STREET and WEST  158 STREET,  BROADWAY between WEST  155 STREET and WEST  156 STREET,  BROADWAY between WEST  153 STREET and WEST  156 STREET';

let borough   = 'Manhattan';
let zipCode   = '10031, 10032, 10033'
let zipArray  = zipCode.split(', ');
let addressArray = address.split(', ');
let parsedAddress = addressArray[0];
let filmLocation = parsedAddress + ', ' + borough + ', NY ' + zipArray[0];

console.log('Zip array is: ' + zipArray);
console.log(filmLocation);
