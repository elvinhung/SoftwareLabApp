from yelpapi import YelpAPI
from pprint import pprint
import pymongo
from pymongo import MongoClient   

import os

import requests
import json


yelp = YelpAPI('aM6SDa2ly7XvvwkMPF43SQW8v0WFGiWP-T-EzVzFE6AQhxwDDCF409ZCtp6P2QWm_MS-62TG_iH0oGWH86FELuRKC_2nYELTowqgkwPsT_DohqjZTRlpKQXKER1fXnYx')

mongo = MongoClient()
mongo_client = MongoClient('mongodb+srv://dbUser:adDJJ0ZG6O7VDdMz@softwarelabapp-hbwi6.mongodb.net/test?retryWrites=true&w=majority')
db = mongo_client.models
restaurants = db.restaurants

os.chdir(r'/Users/manunchopra/Documents/Education/Spring2020/EE461L/SoftwareLabApp/backend')
f = open("city_locations.txt")

for city_code in f:

    city_name_split = city_code.strip('\n').split(",", 1)
    city_name_country = city_name_split[1].rsplit(",", 1)
    city_name = city_name_country[0]
    city_country = city_name_country[1]
    city_key = city_name_split[0]
    cityStr = city_name.split(",")[0]
    city_code = city_key
    print(city_code + " " + cityStr + " " + city_country + " ///" + city_name)

    response = yelp.search_query(term='food', location=city_name, price='1,2,3,4', sort_by='best_match', limit=10)
    data = json.dumps(response)
    restaurants_json = json.loads(data)
    city_dict = {}
    city_dict['businesses'] = []
    for p in restaurants_json['businesses']:
        if ('price' in p):
            review = yelp.reviews_query(id=p['id'], sort_by='rating', limit=3)
            details = yelp.business_query(id=p['id'])
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
            doc_dict['cityName'] = cityStr
            doc_dict['countryCode'] = city_country
            doc_dict['address'] = p['location']['display_address'],
            doc_dict['address'] = p['location']['display_address'],
            doc_dict['address'] = p['location']['display_address'],
            doc_dict['stars'] = p['rating'],
            doc_dict['tags'] = p['categories'],
            doc_dict['review_count'] = p['review_count']
            price = len(p['price'])
            doc_dict['price'] = price
            doc_dict['priceStr'] = p['price']
            doc_dict['link'] = p['url']
            doc_dict['transactions'] = details_json['transactions']
            doc_dict['images'] = details_json['photos'],
            doc_dict['contact'] = p['display_phone']
            doc_dict['reviews'] = reviews_dict
            doc_dict['location_id'] = city_code
            
            city_dict['businesses'].append(doc_dict)

    restaurants.insert_many(city_dict['businesses'][0:3])

