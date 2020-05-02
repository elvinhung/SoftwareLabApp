# -*- coding: utf-8 -*-
import googlemaps
import requests
from pymongo import MongoClient
from pymongo.errors import BulkWriteError
import pytemperature as pytemp
import os

location_url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"
weather_url = "https://api.openweathermap.org/data/2.5/onecall?"
degree_sign = u"\N{DEGREE SIGN}"
API_KEY = 'insert api key here'
CONNECTION_STRING = 'insert MongoDB connection_string here'
os.chdir(r'/Insert/Path/Here/To/SoftwareLabApp/backend')

city_list = open("city_locations.txt")

mongo = MongoClient()
mongo_client = MongoClient(CONNECTION_STRING)
db = mongo_client.models
locations = db.locations
hotels = db.hotels
restaurants = db.restaurants
pointsOfInterest = db.pointsOfInterest
populations = db.populations

gmaps = googlemaps.Client(key=API_KEY)

locations.delete_many({})
db_array = []  # collection of location dictionaries to be inserted into 'locations' collection in database
for element in city_list:
    location_dict = {}
    element = element.strip('\n')
    city_name_split = element.split(",", 1)
    city_name_country = city_name_split[1].rsplit(",", 1)
    city_name = city_name_country[0]  # city's official name
    city_country = city_name_country[1]  # city's country it is located in
    city_key = city_name_split[0]  # city's 3 character code
    location = gmaps.find_place(input=city_name, input_type='textquery', fields=['photos', 'name', 'geometry'])
    # print(city_name.split(",")[0] + ", " + city_name.split(",")[1] + ", " + city_country) -> use this for debugging

    location_dict['name'] = city_name.split(",")[0]
    location_dict['photos'] = location['candidates'][0]['photos']
    lat = location['candidates'][0]['geometry']['location']['lat']
    lon = location['candidates'][0]['geometry']['location']['lng']
    location_dict['latitude'] = lat
    location_dict['longitude'] = lon
    location_dict['hotels'] = []
    location_dict['restaurants'] = []
    location_dict['points of interest'] = []
    location_dict['population'] = []
    location_dict['weather'] = {}
    location_dict['weather']['week_forecast'] = []

    for item in hotels.find({"location_id": city_key}):
        location_dict['hotels'].append(item.get('_id'))
    for item in restaurants.find({"location_id": city_key}):
        location_dict['restaurants'].append(item.get('_id'))
    for item in populations.find({"location_id": city_key}):
        population = item.get('Population')
        location_dict['population'].append(population)
    location_dict['location_id'] = city_key
    location_dict['country'] = city_country
            
    city_request = city_name.replace(" ", "+")
    POI = requests.get(location_url + 'query=' + city_name + '+point+of+interest' + '&key=' + API_KEY).json()
    POI_results = POI['results']
    # print(city_name + " API request successful") -> use this for debugging
    for i in range(5):
        try:
            location_dict['points of interest'].append(POI_results[i])
        except IndexError:
            location_dict['points of interest'].append("No Point of Interest #" + str(i+1) + " for " + city_name)
            print("No Point of Interest #" + str(i+1) + " for " + city_name)

    # print(city_name + " access successful") -> use this for debugging

    complete_url = weather_url + "lat=" + str(lat) + "&lon=" + str(lon) + "&appid=" + API_KEY
    weather_response = requests.get(complete_url).json()
    # print(city_name) -> use this for debugging
    current_temp = weather_response['current']['temp']
    location_dict['weather']['current_temperature'] = str(pytemp.k2f(current_temp)) + " " + degree_sign + "F"
    for day in weather_response['daily']:
        day_temp = day['temp']['day']
        location_dict['weather']['week_forecast'].append(str(pytemp.k2f(day_temp)) + " " + degree_sign + "F")
    # print(city_name + " access successful") -> use this for debugging
    
    db_array.append(location_dict)

# Use the following to create index for the first time, then comment out:
# locations.create_index([
#       ('name', 'text')
#   ],
#   name="search_index"
# )

try:
    x = locations.insert_many(db_array)
except BulkWriteError as bwe:
    print(bwe.details)



