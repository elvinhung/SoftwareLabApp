import googlemaps
from pymongo import MongoClient
import os

from pymongo.errors import BulkWriteError

url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json'

os.chdir(r'/Users/Nithanth/SoftwareLabApp/backend')
city_dict = {}
with open("city_locations.txt") as txt1, open("hotel_locations.txt") as txt2:
    for x, y in zip(txt1, txt2):
        city_name = x.strip()
        city_code = y.strip()
        city_dict[city_name] = city_code

mongo = MongoClient()
mongo_client = MongoClient('connection_string')
db = mongo_client.models
locations = db.locations
hotels = db.hotels
restaurants = db.restaurants

gmaps = googlemaps.Client(key = 'API_KEY_HERE')
locations.delete_many({})
db_array = []
for key in city_dict:
    city_name = key.strip('\n')
    location = gmaps.find_place(input = city_name, input_type = 'textquery', fields = ['photos', 'name', 'geometry'])
    temp = {}
    temp['name'] = location['candidates'][0]['name']
    temp['photos'] = location['candidates'][0]['photos']
    temp['latitude'] = location['candidates'][0]['geometry']['location']['lat']
    temp['longitude'] = location['candidates'][0]['geometry']['location']['lng']
    hotel_matches = hotels.find({"location_id" : city_dict[key]})
    temp['hotels'] = list(hotel_matches)
    restaurant_matches = restaurants.find({"location_id" : city_dict[key]})
    temp['restaurants'] = list(restaurant_matches)
    temp['_id'] = city_dict[key]
    db_array.append(temp)

try:
    x = locations.insert_many(db_array)
except BulkWriteError as bwe:
    print(bwe.details)

