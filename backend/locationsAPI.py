import googlemaps
from pymongo import MongoClient
import os

url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json'
connection_string = 'mongodb+srv://dbUser:adDJJ0ZG6O7VDdMz@softwarelabapp-hbwi6.mongodb.net/test?retryWrites=true&w=majority'
API_KEY = 'AIzaSyBJ2lOAHkcMp6O6SpyeRNcQ0jtjLqGpZnE'

os.chdir(r'/Users/Nithanth/SoftwareLabApp/backend')
city_dict = {}
with open("city_locations.txt") as txt1, open("hotel_locations.txt") as txt2:
    for x, y in zip(txt1, txt2):
        city_name = x.strip()
        city_code = y.strip()
        city_dict[city_name] = city_code

mongo = MongoClient()
mongo_client = MongoClient(connection_string)
db = mongo_client.models
locations = db.locations

dblist = mongo_client.list_database_names()
if "locations" in dblist:
    print("DB check complete")


gmaps = googlemaps.Client(key = API_KEY)

db_array = []
for key in city_dict:
    city_name = key.strip('\n')
    location = gmaps.find_place(input = city_name, input_type = 'textquery', fields = ['photos', 'name'])
    temp = {}
    temp['name'] = location['candidates'][0]['name']
    temp['photos'] = location['candidates'][0]['photos']
    temp['location_id'] = city_dict[key]
    db_array.append(temp)

x = locations.insert_many(db_array)
#print(x.inserted_ids)
