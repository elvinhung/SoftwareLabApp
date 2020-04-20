import requests
from pymongo import MongoClient
import os

from pymongo.errors import BulkWriteError

url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"
API_KEY = 'AIzaSyBJ2lOAHkcMp6O6SpyeRNcQ0jtjLqGpZnE'
os.chdir(r'/Users/Nithanth/SoftwareLabApp/backend')

mongo = MongoClient()
mongo_client = MongoClient('mongodb+srv://dbUser:adDJJ0ZG6O7VDdMz@softwarelabapp-hbwi6.mongodb.net/test?retryWrites=true&w=majority')
db = mongo_client.models

# city_dict = {}
# with open("city_locations.txt") as txt1, open("hotel_locations.txt") as txt2:
#     for x, y in zip(txt1, txt2):
#         city_name = x.strip()
#         city_code = y.strip()
#         city_dict[city_name] = city_code
city_list = open("city_locations.txt")
pointsOfInterest = db.pointsOfInterest
db_array = []
pointsOfInterest.delete_many({})
for element in city_list:
    temp = {}
    city_name_split = element.strip('\n').split(",", 1)
    city_name = city_name_split[1]
    city_key = city_name_split[0]
    temp['location_id'] = city_key
    temp['points of interest'] = []
    city_request = city_name.replace(" ", "+")
    POI = requests.get(url + 'query=' + city_request + '+point+of+interest' + '&key=' + API_KEY).json()
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

try:
    x = pointsOfInterest.insert_many(db_array)
except BulkWriteError as bwe:
    print(bwe.details)