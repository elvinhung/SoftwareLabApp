from amadeus import Client, ResponseError
import pymongo
from pymongo import MongoClient
import os

import requests
import json

#   import responses
import googlemaps


maps = googlemaps.Client('AIzaSyAV1O_tgq4HCmfC4yT7-a8gMKz0v2xSOqw')

amadeus = Client(
    hostname='production',
    client_id='D3dGGqI9fiGNXBAbGmCGhLMYeeue1YGg',
    client_secret='H8M5btnJmg7Dke7g',
)

mongo = MongoClient()
mongo_client = MongoClient('mongodb+srv://dbUser:adDJJ0ZG6O7VDdMz@softwarelabapp-hbwi6.mongodb.net/test?retryWrites=true&w=majority')
db = mongo_client.models
hotels = db.hotels

os.chdir(r'/home/rishab/Documents/Software Lab/SoftwareLabApp/backend')
f = open("hotel_locations.txt")

for city_code in f:
    city_code = city_code.strip('\n')
    print(city_code)
    city = amadeus.shopping.hotel_offers.get(cityCode = city_code, radius = '10', radiusUnit = 'MILE', ratings = '5,4')
    data = json.dumps(city.result)
    city_json = json.loads(data)
    city_dict = {}
    city_dict['hotels'] = []
    print(len(city_json['data']))
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

