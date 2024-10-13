from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import network_as_code as nac
from network_as_code.models.device import DeviceIpv4Addr

app = Flask(__name__, static_folder='../my-app/public')  # Set the static folder to serve the HTML file
CORS(app)  # Enable CORS to allow requests from React

@app.route('/', methods=['GET'])
def home():
    return "Welcome to the Disaster Relief App!"

@app.route('/get-device-location', methods=['GET'])
def get_device_location():
    print("Received request for device location.")  # Debug statement

    # Initialize the client object with your application key
    client = nac.NetworkAsCodeClient(
        token="5af9430f4cmsh955148f812e1c24p1b11b9jsn4b79cbfbc98f",  # Your actual token
    )
    
    try:
        print("Attempting to retrieve device information...")  # Debug statement
        my_device = client.devices.get(
            "0b7052f9-49c4-4669-bade-70fc7bb36b96@testcsp.net",  # Your actual device ID
            ipv4_address=DeviceIpv4Addr(
                public_address="233.252.0.2",
                private_address="192.0.2.25",
                public_port=80
            ),
            ipv6_address="2001:db8:1234:5678:9abc:def0:fedc:ba98",
            phone_number="+36721601234567"
        )
        
        # Specify the maximum amount of time accepted to get location information
        location = my_device.location(max_age=3600)

        # Hard-coded coordinates and civic address for Husky Union Building, Seattle
        hard_coded_longitude = -122.3021
        hard_coded_latitude = 47.6503
        hard_coded_civic_address = "Husky Union Building, Seattle, WA"

        # Log the location details from the API call
        print(f"API Call - Longitude: {location.longitude}, Latitude: {location.latitude}, Civic Address: {location.civic_address}")

        # Log the hard-coded location details
        print(f"Hard-Coded - Longitude: {hard_coded_longitude}, Latitude: {hard_coded_latitude}, Civic Address: {hard_coded_civic_address}")

        return jsonify({
            "hard_coded": {
                "longitude": hard_coded_longitude,  # Return hard-coded value
                "latitude": hard_coded_latitude,    # Return hard-coded value
                "civic_address": hard_coded_civic_address  # Return hard-coded value
            },
            "api_call": {
                "longitude": location.longitude,  # Return Nokia API value
                "latitude": location.latitude,    # Return Nokia API value
                "civic_address": location.civic_address  # Return Nokia API value
            }
        })
    
    except Exception as e:
        print(f"Error retrieving location: {e}")  # Debug statement
        return jsonify({'error': str(e)}), 500

@app.route('/location', methods=['GET'])
def serve_location_page():
    print("Serving the location page...")  # Debug statement
    return send_from_directory(app.static_folder, 'location.html')  # Serve the location.html file

if __name__ == '__main__':
    app.run(debug=True)
