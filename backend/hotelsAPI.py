from amadeus import Client, ResponseError
import pymongo
from pymongo import MongoClient
import os

import requests
import json

amadeus = Client(
    hostname='production',
    client_id='client_id',
    client_secret='client_secret',
)

mongo = MongoClient()
mongo_client = MongoClient('connection_string')
db = mongo_client.models
hotels = db.hotels

os.chdir(r'/home/rishab/Documents/Software Lab/SoftwareLabApp/backend')
f = open("hotel_locations.txt")

for city_code in f:
    city_code = city_code.strip('\n')
    print(city_code)
    city = amadeus.shopping.hotel_offers.get(cityCode = city_code)
    data = json.dumps(city.result)
    city_json = json.loads(data)
    city_dict = {}
    city_dict['hotels'] = []
    for p in city_json['data']:
        if('rating' in p['hotel']):
            city_dict['hotels'].append({
            'name' : p['hotel']['name'],
            'address' : p['hotel']['address'],
            'stars' : p['hotel']['rating']
            })
        
    hotels.insert_many(city_dict['hotels'][0:3])


# nyc = amadeus.shopping.hotel_offers.get(cityCode = 'NYC')
# data1 = json.dumps(nyc.result)
# nyc_json = json.loads(data1)
# nyc_dict = {}
# nyc_dict['hotels'] = []
# for p in nyc_json['data']:
#     if('rating' in p['hotel']):
#         nyc_dict['hotels'].append({
#         'name' : p['hotel']['name'], 
#         'address' : p['hotel']['address'],
#         'stars' : p['hotel']['rating']
#         })

# with open('nyc_hotel.json', 'w') as outfile:
#     json.dump(nyc_dict, outfile)

# sfo = amadeus.shopping.hotel_offers.get(cityCode = 'SAN')
# data2 = json.dumps(sfo.result)
# sfo_json = json.loads(data2)
# sfo_dict = {}
# sfo_dict['hotels'] = []
# for p in sfo_json['data']:
#     if('rating' in p['hotel']):
#         sfo_dict['hotels'].append({
#         'name' : p['hotel']['name'],
#         'address' : p['hotel']['address'],
#         'stars' : p['hotel']['rating']
#         })

# with open('sfo_hotel.json', 'w') as outfile:
#     json.dump(sfo_dict, outfile)

