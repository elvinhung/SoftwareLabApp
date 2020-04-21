from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from pymongo import MongoClient
from bson.json_util import dumps
from bson import ObjectId
import os


application = Flask(__name__)

application.config['MONGO_URI'] = "mongodb+srv://dbUser:adDJJ0ZG6O7VDdMz@softwarelabapp-hbwi6.mongodb.net/models?retryWrites=true&w=majority"


mongo = PyMongo(application)
mongo_client = MongoClient("mongodb+srv://dbUser:adDJJ0ZG6O7VDdMz@softwarelabapp-hbwi6.mongodb.net/models?retryWrites=true&w=majority")

@application.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

@application.route('/', methods=['GET', 'POST'])
@application.route('/index', methods=['GET', 'POST'])
def index():
    return "hello world"

@application.route('/restaurants', methods=['GET'])
def all_restaurants():
    restaurants = mongo.db.restaurants
    args = request.args.get('name')
    filters = request.args.copy()
    if 'stars' in filters.keys():
        stars = filters.get('stars')
        filters['stars'] = {'$gte': stars}
    if 'price' in filters.keys():
        price = filters.get('price')
        filters['price'] = {'$gte': price}
    
    print(filters)
    result = {}
    
    if args is None:
        result = list(restaurants.find())
    else:
        filters = request.args.copy()
        del filters['name']

        restaurants.aggregate([{"$match": {"$text": {"$search": args}}}, {"$out": "temp"}])
        results = mongo.db.temp.find(filters)
        #mongo.db.temp.drop()
        return dumps(results)

    return dumps(result)

@application.route('/restaurants/<ObjectId:oid>', methods=['GET'])
def restaurant_by_id(oid):
    restaurants = mongo.db.restaurants
    result = restaurants.find_one_or_404({"_id": oid})
    distances_collection = mongo.db.distances
    distances = distances_collection.find({"restaurant": oid})
    hotels = []
    for distance in distances: 
        tempDistance = {}
        tempDistance['id'] = distance.get('hotel')
        tempDistance['distance'] = distance.get('distance')
        hotels.append(tempDistance)

    result['hotels'] = hotels
    return dumps(result)
    
@application.route('/hotels', methods=['GET'])
def all_hotels():
    hotels = mongo.db.hotels
    args = request.args.get('name')
    filters = request.args.copy()
    if 'stars' in filters.keys():
        stars = filters.get('stars')
        filters['stars'] = {'$gte': stars}
    if 'price' in filters.keys():
        price = filters.get('price')
        filters['price'] = {'$gte': price}
    
    print(filters)

    result = {}
    if args is None:
        result = list(hotels.find(filters))
    else:
        del filters['name']
        print(filters)
        hotels.aggregate([{"$match": {"$text": {"$search": args}}}, {"$out": "temp"}])
        results = mongo.db.temp.find(filters)
        return dumps(results)

    return dumps(result)

@application.route('/hotels/<ObjectId:oid>', methods=['GET'])
def hotel_by_id(oid):
    hotels = mongo.db.hotels
    result = hotels.find_one({"_id": oid})
    distances_collection = mongo.db.distances
    distances = distances_collection.find({"hotel": oid})
    restaurants = []
    for distance in distances: 
        tempDistance = {}
        tempDistance['id'] = distance.get('restaurant')
        tempDistance['distance'] = distance.get('distance')
        restaurants.append(tempDistance)

    result['restaurants'] = restaurants

    return dumps(result)


@application.route('/locations', methods=['GET'])
def all_locations():
    locations = mongo.db.locations
    args = request.args.get('name')
    result = {}
    if args is None:
            result = list(locations.find(request.args))
    else:   
        filters = request.args.copy()
        del filters['name']

        locations.aggregate([{"$match": {"$text": {"$search": args}}}, {"$out": "temp"}])
        results = mongo.db.temp.find({"$in": filters})
        #mongo.db.temp.drop()
        return dumps(results)

    return dumps(result)

@application.route('/locations/<oid>', methods=['GET'])
def locations_by_id(oid):
    locations = mongo.db.locations
    result = list(locations.find({"_id": oid}))
    return dumps(result)

if __name__ == '__main__':
    application.run()