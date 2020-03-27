from yelpapi import YelpAPI
from pprint import pprint
import pymongo
from pymongo import MongoClient   

import os

import requests
import json


yelp = YelpAPI(api_key)

mongo = MongoClient()
mongo_client = MongoClient(client_key)
db = mongo_client.models
restaurants = db.restaurants

os.chdir(r'/Users/manunchopra/Documents/Education/Spring2020/EE461L/SoftwareLabApp/backend')
f = open("hotel_locations.txt")

for city_code in f:
    city_code = city_code.strip('\n')
    print(city_code)
    response = yelp.search_query(term='seafood', location=city_code, sort_by='rating', limit=3)
    data = json.dumps(response)
    restaurants_json = json.loads(data)
    restaurants_dict = {}
    restaurants_dict['businesses'] = []
    for p in restaurants_json['businesses']:
        restaurants_dict['businesses'].append({
        'name' : p['name'],
        'address' : p['location']['display_address'],
        'stars' : p['rating']
        })
    
    restaurants.insert_many(restaurants_dict['businesses'])

# for business in businesses:
#     print("Name:", business["name"])
#     print("Rating:", business["rating"])
#     print("Address:", " ".join(business["location"]["display_address"]))
#     print("Phone:", business["phone"])
#     print("\n")

#     id = business["id"]

#     photo = business["image_url"]
#     print("--- Photo Link ---")
#     print(photo+ "\n")

#     url="https://api.yelp.com/v3/businesses/" + id + "/reviews"

#     request = requests.get(url, headers=headers)

#     parsed = json.loads(request.text)

#     reviews = parsed["reviews"]

#     print("--- Reviews ---")

#     for review in reviews:
#         print("User:", review["user"]["name"], "Rating:", review["rating"], "Review:", review["text"], "\n")

# headers = {'Authorization': 'Bearer %s' % api_key}
# url = 'https://api.yelp.com/v3/businesses/search'
# params = {'term':'seafood','location':'New York City', 'limit':1}

# request = requests.get(url, params=params, headers=headers)

# nyc = json.loads(request.text)

# with open('nyc_restaurant_final.json', 'w') as outfile:
#     json.dump(nyc, outfile)

# params = {'term':'seafood','location':'San Francisco', 'limit':1}

# request = requests.get(url, params=params, headers=headers)

# sfo = json.loads(request.text)

# with open('sfo_restaurant_final.json', 'w') as outfile:
#     json.dump(sfo, outfile)

# params = {'term':'seafood','location':'London', 'limit':1}

# request = requests.get(url, params=params, headers=headers)

# lon = json.loads(request.text)

# with open('lon_restaurant_final.json', 'w') as outfile:
#     json.dump(lon, outfile)

# businesses = sfo["businesses"]

