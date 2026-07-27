function predictTraffic() {

    // Get all values from webpage
    let day = document.getElementById("day").value;
    let hour = document.getElementById("hour").value;
    let temp = document.getElementById("temp").value;
    let weather = document.getElementById("weather").value;

    let carCount = document.getElementById("carCount").value;
    let bikeCount = document.getElementById("bikeCount").value;
    let busCount = document.getElementById("busCount").value;
    let truckCount = document.getElementById("truckCount").value;


    // Check empty fields
    if (
        day === "" ||
        hour === "" ||
        temp === "" ||
        weather === "" ||
        carCount === "" ||
        bikeCount === "" ||
        busCount === "" ||
        truckCount === ""
    ) {

        document.getElementById("result").innerHTML =
            "⚠️ Please fill all fields";

        return;
    }


    // Show loading message
    document.getElementById("result").innerHTML =
        "⏳ Predicting traffic...";


    // Send data to Flask
    fetch("/predict", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            day: day,
            hour: hour,
            temp: temp,
            weather: weather,

            carCount: carCount,
            bikeCount: bikeCount,
            busCount: busCount,
            truckCount: truckCount

        })

    })

    .then(response => {

        return response.json();

    })

    .then(data => {

        console.log("Flask Response:", data);

        if (data.error) {

            document.getElementById("result").innerHTML =
                "❌ Error: " + data.error;

            return;
        }


        document.getElementById("result").innerHTML =
            "🚦 Traffic Status : " + data.traffic;

    })

    .catch(error => {

        console.error("Prediction Error:", error);

        document.getElementById("result").innerHTML =
            "❌ Prediction Failed";

    });

}