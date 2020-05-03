const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=35c8afdebf3ebb93ebba0cf60621ae45&query=${latitude},${longitude}&units=m`;

    request( {url, json:true}, (error, { body }) => {
        if (error) {
            callback('Unable to connnect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            const description = body.current.weather_descriptions[0];
            const temp = body.current.temperature;
            const feels = body.current.feelslike;
            callback(undefined, `${description}. It is currently ${temp} degrees out. It feels like ${feels} degree out.`);
            // console.log(description);
        }
    });
}

module.exports = forecast;