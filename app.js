// const request = require('request');
const geoCode = require('./utils/geocode') 
const forecast = require('./utils/forecast')

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address');
} else {
  geoCode(address, (error, {longitude, latitude, location}) => {
    if (error) {
      return console.log(error);
    }
  
      forecast(longitude, latitude, (error, forecastData) => {
        if (error) {
          return console.log(error);
        }
        console.log(location)
        console.log(forecastData)
        
    });
  });
}


