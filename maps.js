var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBcQ2VZEjucjBXhU8AjkDck8gBwiETmEoU'
});

// Geocode an address.
googleMapsClient.geocode({
    address: 'La Ruina, Hermosillo, Sonora'
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results);
    }
  });