import network_as_code as nac
from network_as_code.models.device import DeviceIpv4Addr


def get_device_location():    
    # We initialize the client object with your application key
    client = nac.NetworkAsCodeClient(
        token="5af9430f4cmsh955148f812e1c24p1b11b9jsn4b79cbfbc98f",
    )
    
    my_device = client.devices.get(
        "device@testcsp.net",
        ipv4_address=DeviceIpv4Addr(
            public_address="233.252.0.2",
            private_address="192.0.2.25",
            public_port=80
        ),
        ipv6_address="2001:db8:1234:5678:9abc:def0:fedc:ba98",
        # The phone number does not accept spaces or parentheses
        phone_number="+36721601234567"
    )
    
    # Specify the maximum amount of time accepted
    # to get location information, it's a mandatory parameter.
    # If the amount in seconds is not given, the default will be 60 seconds.
    location = my_device.location(max_age=3600)
    
    # The location object contains fields for longitude, latitude and also elevation
    longitude = location.longitude
    latitude = location.latitude
    
    
    print(longitude)
    print(latitude)
    print(location.civic_address)

