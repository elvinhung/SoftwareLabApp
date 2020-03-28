import pymongo
from pymongo import MongoClient
import json
import googlemaps

mongo = MongoClient()
mongo_client = MongoClient('mongodb+srv://dbUser:adDJJ0ZG6O7VDdMz@softwarelabapp-hbwi6.mongodb.net/test?retryWrites=true&w=majority')
db = mongo_client.models
hotels = db.hotels
restaurants = db.restaurants
distances = db.distances

key = 'AIzaSyAV1O_tgq4HCmfC4yT7-a8gMKz0v2xSOqw'
maps = googlemaps.Client(key)

for hotel in hotels.find():

    origin = []
    address = ', '.join(str(x) for x in hotel.get('address').values()).replace('[','').replace(']','').replace('\'','')
    origin.append(address)

    restaurants_find = restaurants.find({'location_id': hotel.get('location_id')})
    for restaurant in restaurants_find:

        destination = []
        destination.append(', '.join(restaurant.get('address')[0]))
        print(destination)

        matrix = maps.distance_matrix(origin, destination)

        distances.insert_one({'hotel': hotel.get("_id"), 'restaurant': restaurant.get('_id'), 'distance': matrix['rows'][0]['elements'][0]['distance']['text']})
        print(matrix)