import googlemaps
from pymongo import MongoClient
import os

from pymongo.errors import BulkWriteError

url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"
API_KEY = 'API_KEY_HERE'
os.chdir(r'/Users/Nithanth/SoftwareLabApp/backend')
# city_dict = {}
# with open("city_locations.txt") as txt1, open("hotel_locations.txt") as txt2:
#     for x, y in zip(txt1, txt2):
#         city_name = x.strip()
#         city_code = y.strip()
#         city_dict[city_name] = city_code
city_list = open("city_locations.txt")
mongo = MongoClient()
mongo_client = MongoClient('connection_string')
db = mongo_client.models
locations = db.locations
hotels = db.hotels
restaurants = db.restaurants

gmaps = googlemaps.Client(key = API_KEY)
locations.delete_many({})
db_array = []
for element in city_list:
    city_name_split = element.strip('\n').split(",", 1)
    city_name = city_name_split[1]
    city_key = city_name_split[0]
    location = gmaps.find_place(input = city_name , input_type = 'textquery', fields = ['photos', 'name', 'geometry'])
    print(city_name)
    temp = {}
    temp['name'] = location['candidates'][0]['name']
    temp['photos'] = location['candidates'][0]['photos']
    temp['latitude'] = location['candidates'][0]['geometry']['location']['lat']
    temp['longitude'] = location['candidates'][0]['geometry']['location']['lng']
    hotel_matches = hotels.find({"location_id" : city_key})
    temp['hotels'] = list(hotel_matches)
    restaurant_matches = restaurants.find({"location_id" : city_key})
    temp['restaurants'] = list(restaurant_matches)
    temp['points of interest'] = []
    temp['_id'] = city_key
    db_array.append(temp)

try:
    x = locations.insert_many(db_array)
except BulkWriteError as bwe:
    print(bwe.details)



