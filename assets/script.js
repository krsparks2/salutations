
mobiscroll.datepicker('#demo-anchored', {
    controls: ['calendar'],
    display: 'anchored'
});

//Global Variables
var apiKey = "2f5d99e17f842067dee162b834d439f8";

//DOM Elements
var submitBtn = document.getElementById("submit");
var locationEl = document.getElementsByClassName("location");
var dateEl = document.getElementById("demo-anchored");
var displayEl = document.getElementsByClassName("displayBox");

function locationInput() {
    var location = locationEl.value;
    getCoordinates(location);
}

function getCoordinates() {
    var queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + location + "&appid=" + apiKey;

    fetch(queryURL).then(function(result) {
        return result.json()
        }).then(function (data) {
            makeCall(data.lat, data.lon);
        });
};

function makeCall(lat, lon) {
    var date = dateEl.value;
    console.log(date);

    fetch("https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lon + "&date=" + date).then(function (result) {
        return result.json()
    }).then(function(data) {
        console.log(data);
        sunEvent(data.results)
    });
}

function sunEvent(results) {
    console.log(results);

    var sunrise = results.sunrise;
    var sunset = results.sunset;
    console.log(sunrise);
    console.log(sunset);

    var sunriseEl = document.createElement("h2")
    var sunsetEl = document.createElement("h2");

    //sunriseEL.innerText = sunrise;
    
    sunriseEl.textContent = "sunrise: " + sunrise;
    sunsetEl.textContent = "sunset: " + sunset;

    displayEl[0].appendChild(sunriseEl);
    displayEl[0].appendChild(sunsetEl);
 }



//Event Listeners
submitBtn.addEventListener("click", locationInput)