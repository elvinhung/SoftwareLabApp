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
    city = amadeus.shopping.hotel_offers.get(cityCode = city_code, radius = '15', radiusUnit = 'MILE', ratings = '5,4')
    data = json.dumps(city.result)
    city_json = json.loads(data)
    city_dict = {}
    city_dict['hotels'] = []
    for p in city_json['data']:
        if('rating' in p['hotel'] and 'media' in p['hotel']):
            temp = {}
            temp['name'] = p['hotel']['name']
            temp['address'] = p['hotel']['address']
            temp['stars'] = p['hotel']['rating']
            temp['image'] = p['hotel']['media'][0]['uri']
            temp['contact'] = p['hotel']['contact']

            if 'description' in p['hotel']:
                temp['description'] = p['hotel']['description']['text']
            
            temp['location_id'] = city_code

            city_dict['hotels'].append(temp)
        
    hotels.insert_many(city_dict['hotels'][0:3])
