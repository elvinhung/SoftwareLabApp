from yelpapi import YelpAPI
from pprint import pprint
import pymongo
from pymongo import MongoClient   

import os

import requests
import json


yelp = YelpAPI(yelp_api_key)

mongo = MongoClient()
mongo_client = MongoClient(mdb_connection_uri)
db = mongo_client.models
restaurants = db.restaurants

os.chdir(r'/Users/manunchopra/Documents/Education/Spring2020/EE461L/SoftwareLabApp/backend')
f = open("hotel_locations.txt")

for city_code in f:
    city_code = city_code.strip('\n')
    print(city_code)
    response = yelp.search_query(term='food', location=city_code, sort_by='best_match', limit=3)
    data = json.dumps(response)
    restaurants_json = json.loads(data)
    city_dict = {}
    city_dict['businesses'] = []
    for p in restaurants_json['businesses']:
        review = yelp.reviews_query(id=p['id'], sort_by='rating', limit=3)
        data = json.dumps(review)
        reviews_json = json.loads(data)
        reviews_dict = {}
        reviews_dict['reviews'] = []
        for q in reviews_json['reviews']:
            reviews_dict['reviews'].append({
            'user name' : q['user']['name'],
            'text' : q['text'],
            'stars' : q['rating']
            })
        doc_dict = {}
        doc_dict['name'] = p['name'],
        doc_dict['address'] = p['location']['display_address'],
        doc_dict['stars'] = p['rating'],
        doc_dict['image'] = p['image_url'],
        doc_dict['contact'] = p['display_phone']
        doc_dict['reviews'] = reviews_dict
        doc_dict['location_id'] = city_code

        city_dict['businesses'].append(doc_dict)

    restaurants.insert_many(city_dict['businesses'])

