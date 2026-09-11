const getWeather = require("./data1/forecast");
 
const Input = process.argv[2];

if (!Input) {
    console.log("Please enter a country name.");
    process.exit(1);
}

const printResult = (weatherData) => {
    console.log("\n----- Weather Report -----");
    console.log("Location   :", weatherData.placeName);
    console.log("Latitude   :", weatherData.latitude);
    console.log("Longitude  :", weatherData.longitude);
    console.log("Condition  :", weatherData.condition);
    console.log("Temperature:", weatherData.temperatureC + "°C", "(" + weatherData.temperatureF + "°F)");
    console.log("---------------------------\n");
};

getWeather(Input, (error, weatherData) => {
    if (error) {
        console.log("Error:", error);
        return;
    }

    printResult(weatherData);
});