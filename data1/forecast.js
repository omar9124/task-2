const request = require("request");

const getWeather = (locationName, callback) => {
    const url =
        `https://api.weatherapi.com/v1/current.json?key=b935c5b5294c4cee8a0191800261009&q=${encodeURIComponent(locationName)}`;

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Network Error: Unable to connect to weather service.", undefined);
        } else if (response.body.error) {
            callback(`Weather API Error: ${response.body.error.message}`, undefined);
        } else {
            callback({
                placeName: `${response.body.location.name}, ${response.body.location.region}, ${response.body.location.country}`,
                latitude: response.body.location.lat,
                longitude: response.body.location.lon,
                temperatureC: response.body.current.temp_c,
                temperatureF: response.body.current.temp_f,
                condition: response.body.current.condition.text
            }, undefined);
        }
    });
};

module.exports = getWeather;
