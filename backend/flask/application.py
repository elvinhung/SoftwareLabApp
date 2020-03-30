from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson import ObjectId
import os


application = Flask(__name__)

application.config['MONGO_URI'] = os.environ['CONNECTION_STRING']

mongo = PyMongo(application)

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

    result = list(restaurants.find())

    return dumps(result)

@application.route('/restaurants/<oid>', methods=['GET'])
def restaurant_by_id(oid):
    restaurants = mongo.db.restaurants
    result = restaurants.find_one({"_id": ObjectId(oid)})
    distances_collection = mongo.db.distances
    distances = distances_collection.find({"restaurant": ObjectId(oid)})
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
    result = list(hotels.find())

    return dumps(result)

@application.route('/hotels/<oid>', methods=['GET'])
def hotel_by_id(oid):
    hotels = mongo.db.hotels
    result = hotels.find_one({"_id": ObjectId(oid)})
    distances_collection = mongo.db.distances
    distances = distances_collection.find({"hotel": ObjectId(oid)})
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
    result = list(locations.find())

    return dumps(result)

@application.route('/locations/<oid>', methods=['GET'])
def locations_by_id(oid):
    locations = mongo.db.locations
    result = list(locations.find({"_id": oid}))
    return dumps(result)

if __name__ == '__main__':
    application.run()