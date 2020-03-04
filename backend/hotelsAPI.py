from amadeus import Client, ResponseError
import json

amadeus = Client(
    client_id='API_KEY',
    client_secret='API_SECRET'
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

with open('london_final.json', 'w') as outfile:
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

with open('nyc_final.json', 'w') as outfile:
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

with open('sfo_final.json', 'w') as outfile:
    json.dump(sfo_dict, outfile)

