const weatherSelect = document.getElementById("weather");

const weatherIcon = document.getElementById("weatherIcon");
const weatherTitle = document.getElementById("weatherTitle");

weatherSelect.addEventListener("change", function(){

    switch(this.value){

        case "Sunny":
            weatherIcon.innerHTML="☀️";
            weatherTitle.innerHTML="Sunny";
            break;

        case "Rain":
            weatherIcon.innerHTML="🌧️";
            weatherTitle.innerHTML="Rainy";
            break;

        case "Cloudy":
            weatherIcon.innerHTML="☁️";
            weatherTitle.innerHTML="Cloudy";
            break;

        case "Fog":
            weatherIcon.innerHTML="🌫️";
            weatherTitle.innerHTML="Foggy";
            break;

    }

});