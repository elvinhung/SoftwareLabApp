from yelpapi import YelpAPI
from pprint import pprint
import pymongo
from pymongo import MongoClient   

import os

import requests
import json


yelp = YelpAPI(api_key)

mongo = MongoClient()
mongo_client = MongoClient((mongo_uri))
db = mongo_client.models
restaurants = db.restaurants

os.chdir(r'/Users/manunchopra/Documents/Education/Spring2020/EE461L/SoftwareLabApp/backend')
f = open("restaurant_locations.txt")

for city_code in f:
    city = city_code.strip('\n')
    print(city_code)
    cityArr = city.split(',')
    city_code = cityArr[0]
    cityStr = cityArr[1]
    response = yelp.search_query(term='food', location=cityStr, price='1,2,3,4', sort_by='best_match', limit=10)
    data = json.dumps(response)
    restaurants_json = json.loads(data)
    city_dict = {}
    city_dict['businesses'] = []
    for p in restaurants_json['businesses']:
        if ('price' in p):
            review = yelp.reviews_query(id=p['id'], sort_by='rating', limit=3)
            details = yelp.business_query(name=p['name'], id=p['id'], address1=p['location']['address1'], city=p['location']['city'], state=p['location']['state'], country=p['location']['country'], limit=1)
            data = json.dumps(review)
            detaildata = json.dumps(details)
            reviews_json = json.loads(data)
            details_json = json.loads(detaildata)
            reviews_dict = {}
            reviews_dict['reviews'] = []
            for q in reviews_json['reviews']:
                reviews_dict['reviews'].append({
                'user_name' : q['user']['name'],
                'text' : q['text'],
                'stars' : q['rating']
                })
            doc_dict = {}
            doc_dict['name'] = p['name'],
            doc_dict['address'] = p['location']['display_address'],
            doc_dict['stars'] = p['rating'],
            doc_dict['tags'] = p['categories'],
            doc_dict['review_count'] = p['review_count']
            price = len(p['price'])
            doc_dict['price'] = price
            doc_dict['priceStr'] = p['price']
            doc_dict['transactions'] = details_json['transactions']
            doc_dict['images'] = details_json['photos'],
            doc_dict['contact'] = p['display_phone']
            doc_dict['reviews'] = reviews_dict
            doc_dict['location_id'] = city_code
            
            restaurants.create_index([
                ('name', 'text')
                ],
                name="search_index"
            )
            city_dict['businesses'].append(doc_dict)

    restaurants.insert_many(city_dict['businesses'][0:3])

