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
    args = request.args.get('q')
    sort = request.args.get('sort')
    sortBy = request.args.get('sortBy')
    filters = request.args.copy()
    if 'stars' in filters.keys():
        stars = filters.get('stars')
        filters['stars'] = {'$gte': int(stars)}
    if 'price' in filters.keys():
        price = filters.get('price')
        filters['price'] = {'$gte': int(price)}
    
    sort_dict = []
    if sort != None:
        del filters['sort']
        del filters['sortBy']
        sort_dict = [(sortBy, int(sort))]
    
    else:
        sort_dict = [("$natural", 1)] 

    if filters is None:
        results = list(restaurants.find().sort(sort_dict))
        return dumps(results)

    if args is None:
        results = list(restaurants.find(filters).sort(sort_dict))
        return dumps(results)
    else:
        del filters['q']
        restaurants.aggregate([{"$match": {"$text": {"$search": args}}},{ "$sort": { "score": { "$meta": "textScore" } } }, {"$match" : filters}, {"$out": "temp"}])
        results = mongo.db.temp.find().sort(sort_dict)
        return dumps(results)


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
    args = request.args.get('q')
    sort = request.args.get('sort')
    sortBy = request.args.get('sortBy')
    filters = request.args.copy()
    if 'stars' in filters.keys():
        stars = filters.get('stars')
        filters['stars'] = {'$gte': stars}
    if 'price' in filters.keys():
        price = filters.get('price')
        filters['price'] = {'$gte': price}
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
        results = list(hotels.find().sort(sort_dict))
        return dumps(results)
    
    elif args is None:
        results = list(hotels.find(filters).sort(sort_dict))
        return dumps(results)
    else:
        del filters['q']
        hotels.aggregate([{"$match": {"$text": {"$search": args}}},{ "$sort": { "score": { "$meta": "textScore" } } }, {"$match" : filters}, {"$out": "temp"}])
        results = mongo.db.temp.find(filters).sort(sort_dict)
        return dumps(results)

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
    filters = request.args.copy()
    args = request.args.get('q')
    sort = request.args.get('sort')
    sortBy = request.args.get('sortBy')
    sort_dict = []
    results = {}
    
    if sort != None:
        del filters['sort']
        del filters['sortBy']
        sort_dict = [(sortBy, int(sort))]
        print(sort_dict)

    else:
        sort_dict = [("$natural", 1)] 

    if filters is None:
        results = list(locations.find().sort(sort_dict))
        return dumps(results)
    
    elif args is None:
        results = list(locations.find(filters).sort(sort_dict))
        return dumps(results)
    
    else:   
        del filters['q']
        locations.aggregate([{"$match": {"$text": {"$search": args}}},{ "$sort": { "score": { "$meta": "textScore" } } }, {"$match" : filters}, {"$out": "temp"}])
        results = mongo.db.temp.find(filters).sort(sort_dict)
        return dumps(results)

@application.route('/locations/<oid>', methods=['GET'])
def locations_by_id(oid):
    locations = mongo.db.locations
    result = locations.find_one({"location_id": oid})

    hotels = list(mongo.db.hotels.find({"location_id": oid}))
    restaurants = list(mongo.db.restaurants.find({"location_id": oid}))
    points_of_interest = list(mongo.db.pointsOfInterest.find({"location_id": oid}))
    population = mongo.db.populations.find_one({"location_id": oid}).get('Population')
    weather = mongo.db.weather.find_one({"location_id": oid})


    result['hotels'] = hotels
    result['restaurants'] = restaurants
    result['points of interest'] = points_of_interest
    result['population'] = population
    result['weather'] = weather

    return dumps(result)

if __name__ == '__main__':
    application.run()