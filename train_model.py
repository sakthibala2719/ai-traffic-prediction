# ==========================
# Import Libraries
# ==========================

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib
import os

# ==========================
# Load Dataset
# ==========================

data = pd.read_csv("traffic.csv")

print("Dataset Loaded Successfully!")
print(data.head())

# ==========================
# Encode Text Columns
# ==========================

label_encoders = {}

categorical_columns = [
    "Day",
    "Weather",
    "Traffic Situation"
]

for column in categorical_columns:
    le = LabelEncoder()
    data[column] = le.fit_transform(data[column])
    label_encoders[column] = le

# ==========================
# Features and Target
# ==========================

X = data[[
    "Hour",
    "Temperature",
    "CarCount",
    "BikeCount",
    "BusCount",
    "TruckCount",
    "Weather",
    "Day"
]]

y = data["Traffic Situation"]

# ==========================
# Train Test Split
# ==========================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# ==========================
# Train Random Forest Model
# ==========================

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X_train, y_train)

# ==========================
# Test Accuracy
# ==========================

y_pred = model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)

print("\nModel Accuracy : {:.2f}%".format(accuracy * 100))

# ==========================
# Save Model
# ==========================

os.makedirs("model", exist_ok=True)

joblib.dump(model, "model/traffic_model.pkl")

joblib.dump(label_encoders, "model/label_encoders.pkl")

print("\nModel Saved Successfully!")
print("Location : model/traffic_model.pkl")

print("\nTraining Completed Successfully!")
