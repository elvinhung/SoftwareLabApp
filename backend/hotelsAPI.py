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

# db.hotels.create_index([
#       ("$**", 'text')
#   ],
#   name="search_index"
# )


os.chdir(r"C:\Users\risha\Documents\Spring 20\SoftwareLabApp\backend")
f = open("restaurant_locations.txt")

for city_code in f:
    city = city_code.strip('\n')
    print(city_code)
    cityArr = city.split(',')
    cityCode = cityArr[0]
    cityStr = cityArr[1]
    print(city_code)
    city = amadeus.shopping.hotel_offers.get(cityCode = cityCode, radius = '10', radiusUnit = 'MILE')
    data = json.dumps(city.result)
    city_json = json.loads(data)
    city_dict = {}
    city_dict['hotels'] = []
    for p in city_json['data']:
        if('rating' in p['hotel'] and 'media' in p['hotel'] and 'amenities' in p['hotel']):
            temp = {}
            temp['name'] = p['hotel']['name']
            temp['address'] = p['hotel']['address']
            temp['stars'] = p['hotel']['rating']
            temp['image'] = p['hotel']['media'][0]['uri']
            temp['contact'] = p['hotel']['contact']

            if "SWIMMING_POOL" in p['hotel']['amenities']:
                temp['swimming_pool'] = True
            else:
                temp['swimming_pool'] = False

            if 'description' in p['hotel']:
                temp['description'] = p['hotel']['description']['text']
            
            temp['location_id'] = cityCode

            city_dict['hotels'].append(temp)
        
    hotels.insert_many(city_dict['hotels'][0:3])
