
mobiscroll.datepicker('#demo-anchored', {
    controls: ['calendar'],
    display: 'anchored'
});

//Global Variables
var apiKey = "2f5d99e17f842067dee162b834d439f8";

//DOM Elements
var submitBtn = document.getElementById("submit");
var locationEl = document.getElementById("location");
var dateEl = document.getElementById("demo-anchored");
var displayEl = document.getElementById("displayBox");
var solarNoonEl = document.getElementById("solar-noon")

function locationInput() {
    var location = locationEl.value;

    getCoordinates(location);
}

function getCoordinates(location) {
    var queryURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + location + "&appid=" + apiKey;

    fetch(queryURL).then(function(result) {
        return result.json()
        }).then(function (data) {
            // console.log(data)
            makeCall(data[0].lat, data[0].lon);
        });
};

function makeCall(lat, lon) {
    var date = dateEl.value;
    // console.log("https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lon + "&date=" + '2022-06-21' + "&formatted=0");

    fetch("https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lon + "&date=" + date + "&formatted=0").then(function (result) {
        return result.json()
    }).then(function(data) {
        console.log(data);
        sunEvent(data.results)
    });
}

function sunEvent(results) {
    console.log(results);
    displayEl.innerHTML = '';
    solarNoonEl.innerHTML = '';

    var sunrise = new Date(results.sunrise).toLocaleTimeString();
    var sunset = new Date(results.sunset).toLocaleTimeString();
    var highnoon = new Date(results.solar_noon).toLocaleTimeString();
    // var sunrise = results.sunrise;
    // var sunset = results.sunset;
    // var highnoon = results.solar_noon;
    console.log(sunrise);
    console.log(sunset);
    console.log(highnoon);

    var sunriseEl = document.createElement("h2");
    var sunsetEl = document.createElement("h2");
    var highnoonEl = document.createElement("h2");
    
    sunriseEl.textContent = "sunrise: " + sunrise;
    sunsetEl.textContent = "sunset: " + sunset;
    highnoonEl.textContent = "high noon: " + highnoon;

    displayEl.append(sunriseEl, sunsetEl);
    solarNoonEl.append(highnoonEl);
}

//Event Listeners
submitBtn.addEventListener("click", locationInput)

