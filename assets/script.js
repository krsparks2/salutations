//Calendar
mobiscroll.datepicker("#demo-anchored", {
    controls: ["calendar"],
    display: "anchored"
});

//Global Variables
var apiKey = "2f5d99e17f842067dee162b834d439f8";

//DOM Elements
var submitBtn = document.getElementById("submit");
var locationEl = document.getElementById("location");
var dateEl = document.getElementById("demo-anchored");
var morningEl = document.getElementById("morning");
var solarNoonEl = document.getElementById("solar-noon");
var eveningEl = document.getElementById("evening");

//Handles user location input
function locationInput() {
    var location = locationEl.value;
    localStorage.setItem("location", location);

    getCoordinates(location);
}

//Passes user input through API to call coordinates
function getCoordinates(location) {
    var queryURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + location + "&appid=" + apiKey;

    fetch(queryURL).then(function(result) {
        return result.json()
        }).then(function (data) {
            // console.log(data)
            makeCall(data[0].lat, data[0].lon);
        });
};

//Passes called coordinates through API to grab sun event times
function makeCall(lat, lon) {
    var date = dateEl.value;
    localStorage.setItem("date", date);

    fetch("https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lon + "&date=" + date + "&formatted=0").then(function (result) {
        return result.json()
    }).then(function(data) {
        console.log(data);
        sunEvent(data.results)
    });
}

//Changes UTC data results to local time & dynamically creates elements to append results to main body
function sunEvent(results) {
    console.log(results);
    morningEl.innerHTML = "";
    solarNoonEl.innerHTML = "";
    eveningEl.innerHTML = "";

    var sunrise = new Date(results.sunrise).toLocaleTimeString();
    var highnoon = new Date(results.solar_noon).toLocaleTimeString();
    var sunset = new Date(results.sunset).toLocaleTimeString();

    // var sunrise = results.sunrise;
    // var sunset = results.sunset;
    // var highnoon = results.solar_noon;
    // console.log(sunrise);
    // console.log(highnoon);
    // console.log(sunset);

    localStorage.setItem("sunrise", sunrise);
    localStorage.setItem("highnoon", highnoon);
    localStorage.setItem("sunset", sunset);

    var sunriseEl = document.createElement("h2");
    var highnoonEl = document.createElement("h2");
    var sunsetEl = document.createElement("h2");
    
    sunriseEl.textContent = sunrise;
    highnoonEl.textContent = highnoon;
    sunsetEl.textContent = sunset;

    morningEl.append(sunriseEl);
    solarNoonEl.append(highnoonEl);
    eveningEl.append(sunsetEl);
}

//Event Listeners
submitBtn.addEventListener("click", locationInput)