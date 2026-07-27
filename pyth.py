import pickle

with open("traffic_model.pkl", "rb") as f:
    model = pickle.load(f)

print(model)