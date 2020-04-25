# -*- coding: utf-8 -*-
import requests
import pytemperature as pytemp
from pymongo import MongoClient
import os
from pymongo.errors import BulkWriteError

degree_sign = u"\N{DEGREE SIGN}"
API_KEY = '076029bc36157f1ec3aa33da4fa87612'
base_url = "https://api.openweathermap.org/data/2.5/onecall?"
os.chdir(r'/Users/Nithanth/SoftwareLabApp/backend')

mongo = MongoClient()
mongo_client = MongoClient('mongodb+srv://dbUser:adDJJ0ZG6O7VDdMz@softwarelabapp-hbwi6.mongodb.net/test?retryWrites=true&w=majority')
db = mongo_client.models
weather = db.weather
locations = db.locations
db_array = []
weather.delete_many({})
city_list = open("city_locations.txt")
for element in city_list:
    temp = {}
    temp['current'] = {}
    temp['week_forecast'] = []
    city_name_split = element.strip('\n').split(",", 1)
    city_name_country = city_name_split[1].rsplit(",", 1)
    city_name = city_name_country[0]
    city_country = city_name_country[1]
    city_key = city_name_split[0]
    temp['location_id'] = city_key
    temp['city'] = city_name.split(",")[0]
    temp['country'] = city_country
    city_item = locations.find_one({"location_id" : city_key})
    lat = city_item['latitude']
    lon = city_item['longitude']
    complete_url = base_url + "lat=" + str(lat) + "&lon=" + str(lon) + "&appid=" + API_KEY
    weather_response = requests.get(complete_url).json()
    print(city_name)
    current_temp = weather_response['current']['temp']
    current_feel = weather_response['current']['feels_like']
    current_humidity = weather_response['current']['humidity']
    current_wind_speed = weather_response['current']['wind_speed']
    current_description = weather_response['current']['weather'][0]['description']
    temp['current']['current temp'] = str(pytemp.k2f(current_temp)) + " " + degree_sign + "F"
    temp['current']['current feel'] = str(pytemp.k2f(current_feel)) + " " + degree_sign + "F"
    temp['current']['current humidity'] = str(current_humidity) + "%"
    temp['current']['current wind speed'] = str(current_wind_speed) + " m/s"
    temp['current']['current description'] = current_description
    for day in weather_response['daily']:
        day_temp = day['temp']['day']
        temp['week_forecast'].append(str(pytemp.k2f(day_temp)) + " " + degree_sign + "F")
    print(city_name + " access successful")
    db_array.append(temp)
weather.create_index([
      ('name', 'text')
  ],
  name="search_index"
)
try:
    x = weather.insert_many(db_array)
except BulkWriteError as bwe:
    print(bwe.details)



