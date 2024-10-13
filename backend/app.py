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
    # Your logic to retrieve location
    client = nac.NetworkAsCodeClient(
        token="your_token_here",
    )
    
    my_device = client.devices.get(
        "your_device_id",
        ipv4_address=DeviceIpv4Addr(
            public_address="233.252.0.2",
            private_address="192.0.2.25",
            public_port=80
        ),
        ipv6_address="2001:db8:1234:5678:9abc:def0:fedc:ba98",
        phone_number="+36721601234567"
    )
    
    location = my_device.location(max_age=3600)
    
    return jsonify({
        "longitude": location.longitude,
        "latitude": location.latitude,
        "civic_address": location.civic_address
    })

@app.route('/location', methods=['GET'])
def serve_location_page():
    return send_from_directory(app.static_folder, 'location.html')  # Serve the location.html file

if __name__ == '__main__':
    app.run(debug=True)
