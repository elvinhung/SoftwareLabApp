import googlemaps
import requests
from pymongo import MongoClient
import os

from pymongo.errors import BulkWriteError

url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"
API_KEY = 'api key'
os.chdir(r'/Users/Nithanth/SoftwareLabApp/backend')

city_list = open("city_locations.txt")
mongo = MongoClient()
mongo_client = MongoClient('connection string')
db = mongo_client.models
locations = db.locations
hotels = db.hotels
restaurants = db.restaurants
pointsOfInterest = db.pointsOfInterest
populations = db.populations
weather = db.weather

gmaps = googlemaps.Client(key = API_KEY)
locations.delete_many({})
db_array = []
for element in city_list:
    city_name_split = element.strip('\n').split(",", 1)
    city_name_country = city_name_split[1].rsplit(",", 1)
    city_name = city_name_country[0]
    city_country = city_name_country[1]
    city_key = city_name_split[0]
    location = gmaps.find_place(input = city_name , input_type = 'textquery', fields = ['photos', 'name', 'geometry'])
    print(city_name.split(",")[0] + ", " + city_name.split(",")[1] + ", " + city_country)
    temp = {}
    temp['name'] = city_name.split(",")[0]
    temp['photos'] = location['candidates'][0]['photos']
    temp['latitude'] = location['candidates'][0]['geometry']['location']['lat']
    temp['longitude'] = location['candidates'][0]['geometry']['location']['lng']
    temp['hotels'] = []
    temp['restaurants'] = []
    temp['points of interest'] = []
    temp['population'] = []
    temp['weather'] = []
    for item in hotels.find({"location_id" : city_key}):
        temp['hotels'].append(item.get('_id'))
    for item in restaurants.find({"location_id" : city_key}):
        temp['restaurants'].append(item.get('_id'))
    # for item in pointsOfInterest.find({"location_id" : city_key}):
    #     temp['points of interest'].append(item.get('_id'))
    for item in populations.find({"location_id" : city_key}):
        temp['population'].append(item.get('Population'))
    for item in weather.find({"location_id" : city_key}):
        temp['weather'].append(item)
    temp['location_id'] = city_key
    temp['country'] = city_country
            
    city_request = city_name.replace(" ", "+")
    POI = requests.get(url + 'query=' + city_name + '+point+of+interest' + '&key=' + API_KEY).json()
    POI_results = POI['results']
    print(city_name + " API request successful")
    for i in range(5):
        try:
            temp['points of interest'].append(POI_results[i])
        except IndexError:
            temp['points of interest'].append("No Point of Interest #" + str(i+1) + " for " + city_name)
            print("No Point of Interest #" + str(i+1) + " for " + city_name)

    print(city_name + " access successful")
    
    db_array.append(temp)
# locations.create_index([
#       ('name', 'text')
#   ],
#   name="search_index"
# )
try:
    x = locations.insert_many(db_array)
except BulkWriteError as bwe:
    print(bwe.details)



