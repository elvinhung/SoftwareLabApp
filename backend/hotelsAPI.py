from amadeus import Client, ResponseError

import requests
import json

amadeus = Client(
    hostname='production',
    client_id='D3dGGqI9fiGNXBAbGmCGhLMYeeue1YGg',
    client_secret='H8M5btnJmg7Dke7g',
)


london = amadeus.shopping.hotel_offers.get(cityCode = 'LON')
data = json.dumps(london.result)
lon_json = json.loads(data)
lon_dict = {}
lon_dict['hotels'] = []
for p in lon_json['data']:
    if('rating' in p['hotel']):
        lon_dict['hotels'].append({
        'name' : p['hotel']['name'],
        'address' : p['hotel']['address'],
        'stars' : p['hotel']['rating']
        })

with open('london_hotel.json', 'w') as outfile:
    json.dump(lon_dict, outfile)


nyc = amadeus.shopping.hotel_offers.get(cityCode = 'NYC')
data1 = json.dumps(nyc.result)
nyc_json = json.loads(data1)
nyc_dict = {}
nyc_dict['hotels'] = []
for p in nyc_json['data']:
    if('rating' in p['hotel']):
        nyc_dict['hotels'].append({
        'name' : p['hotel']['name'], 
        'address' : p['hotel']['address'],
        'stars' : p['hotel']['rating']
        })

with open('nyc_hotel.json', 'w') as outfile:
    json.dump(nyc_dict, outfile)

sfo = amadeus.shopping.hotel_offers.get(cityCode = 'SAN')
data2 = json.dumps(sfo.result)
sfo_json = json.loads(data2)
sfo_dict = {}
sfo_dict['hotels'] = []
for p in sfo_json['data']:
    if('rating' in p['hotel']):
        sfo_dict['hotels'].append({
        'name' : p['hotel']['name'],
        'address' : p['hotel']['address'],
        'stars' : p['hotel']['rating']
        })

with open('sfo_hotel.json', 'w') as outfile:
    json.dump(sfo_dict, outfile)

