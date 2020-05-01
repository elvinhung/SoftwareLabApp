from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson import ObjectId
import os


application = Flask(__name__)
application.config['MONGO_URI'] = os.environ['CONNECTION_STRING']
mongo = PyMongo(application)
nullObject = mongo.db.NullObject.find_one()


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

@application.route('/search', methods=['GET'])
def search():
    restaurants = mongo.db.restaurants
    hotels = mongo.db.hotels
    locations = mongo.db.locations

    args = request.args
    if args is None:
        return 

    results = {}

    results['hotels'] = handler(args, hotels)
    results['restaurants'] = handler(args, restaurants)
    results['locations'] = handler(args, locations)

    return dumps(results)
    
def handler(args, collection):
    query = args.get('q')
    sort = args.get('sort')
    sortBy = args.get('sortBy')
    filters = args.copy()
    if 'stars' in filters.keys():
        stars = filters.get('stars')
        filters['stars'] = {'$gte': int(stars)}
    if 'price' in filters.keys():
        price = filters.get('price')
        filters['price'] = {'$gte': int(price)}
    if 'swimming_pool' in filters.keys():
        if filters['swimming_pool'] == 'true':
            filters['swimming_pool'] = True
        else:
            filters['swimming_pool'] = False

    sort_dict = []
    if sort != None:
        del filters['sort']
        del filters['sortBy']
        sort_dict = [(sortBy, int(sort))]
    
    else:
        sort_dict = [("$natural", 1)] 

    if filters is None:
        results = list(collection.find().sort(sort_dict))

    elif query is None:
        results = list(collection.find(filters).sort(sort_dict))

    else:
        del filters['q']
        collection.aggregate([{"$match": {"$text": {"$search": query}}},{ "$sort": { "score": { "$meta": "textScore" } } }, {"$match" : filters}, {"$out": "temp"}])
        results = list(mongo.db.temp.find(filters).sort(sort_dict))

    if not results:
        print("returning null")
        return nullObject
    
    else:
        print("returning results")
        return results

@application.route('/restaurants', methods=['GET'])
def all_restaurants():
    restaurants = mongo.db.restaurants
    args = request.args
    return dumps(handler(args, restaurants))

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
    args = request.args
    return dumps(handler(args, hotels))

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
    args = request.args
    return dumps(handler(args, locations))

@application.route('/locations/<oid>', methods=['GET'])
def locations_by_id(oid):
    locations = mongo.db.locations
    result = locations.find_one_or_404({"location_id": oid})

    hotels = list(mongo.db.hotels.find({"location_id": oid}))
    restaurants = list(mongo.db.restaurants.find({"location_id": oid}))
    population = mongo.db.populations.find_one({"location_id": oid}).get('Population')
    weather = mongo.db.weather.find_one({"location_id": oid})


    result['hotels'] = hotels
    result['restaurants'] = restaurants
    result['population'] = population
    result['weather'] = weather

    return dumps(result)

if __name__ == '__main__':
    application.run()