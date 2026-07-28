from flask import Flask, render_template, request, jsonify
import joblib

app = Flask(__name__)

# ==========================
# Load ML Model
# ==========================

model = joblib.load("traffic_model.pkl")
label_encoders = joblib.load("label_encoders.pkl")


# ==========================
# Home Page
# ==========================

@app.route("/")
def home():
    return render_template("index.html")


# ==========================
# Prediction API
# ==========================

@app.route("/predict", methods=["POST"])
def predict():

    try:

        # Get data from JavaScript
        data = request.get_json()

        # ==========================
        # Get Input Values
        # ==========================

        day = data["day"]
        hour = int(data["hour"])
        temperature = int(data["temp"])

        car_count = int(data["carCount"])
        bike_count = int(data["bikeCount"])
        bus_count = int(data["busCount"])
        truck_count = int(data["truckCount"])

        weather = data["weather"]


        # ==========================
        # Encode Day
        # ==========================

        day_encoder = label_encoders["Day"]

        day_value = day_encoder.transform([day])[0]


        # ==========================
        # Encode Weather
        # ==========================

        weather_encoder = label_encoders["Weather"]

        weather_value = weather_encoder.transform([weather])[0]


        # ==========================
        # Prepare Model Input
        # ==========================

        input_data = [[
            hour,
            temperature,
            car_count,
            bike_count,
            bus_count,
            truck_count,
            weather_value,
            day_value
        ]]


        # ==========================
        # Make Prediction
        # ==========================

        prediction = model.predict(input_data)

        result = prediction[0]


        # ==========================
        # Convert Prediction
        # ==========================

        traffic_encoder = label_encoders["Traffic Situation"]

        traffic = traffic_encoder.inverse_transform([result])[0]


        # ==========================
        # Send Result
        # ==========================

        return jsonify({
            "traffic": traffic
        })


    except Exception as e:

        print("ERROR:", e)

        return jsonify({
            "error": str(e)
        }), 500


# ==========================
# Run Flask
# ==========================

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
