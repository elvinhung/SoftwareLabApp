import requests
import json

api_key = "aM6SDa2ly7XvvwkMPF43SQW8v0WFGiWP-T-EzVzFE6AQhxwDDCF409ZCtp6P2QWm_MS-62TG_iH0oGWH86FELuRKC_2nYELTowqgkwPsT_DohqjZTRlpKQXKER1fXnYx"
headers = {'Authorization': 'Bearer %s' % api_key}
url = 'https://api.yelp.com/v3/businesses/search'
params = {'term':'seafood','location':'New York City', 'limit':1}

request = requests.get(url, params=params, headers=headers)

parsed = json.loads(request.text)

with open('nyc_restaurant_final.json', 'w') as outfile:
    json.dump(parsed, outfile)

params = {'term':'seafood','location':'San Francisco', 'limit':1}

request = requests.get(url, params=params, headers=headers)

parsed = json.loads(request.text)

with open('sfo_restaurant_final.json', 'w') as outfile:
    json.dump(parsed, outfile)

params = {'term':'seafood','location':'London', 'limit':1}

request = requests.get(url, params=params, headers=headers)

parsed = json.loads(request.text)

with open('lon_restaurant_final.json', 'w') as outfile:
    json.dump(parsed, outfile)

businesses = parsed["businesses"]


for business in businesses:
    print("Name:", business["name"])
    print("Rating:", business["rating"])
    print("Address:", " ".join(business["location"]["display_address"]))
    print("Phone:", business["phone"])
    print("\n")

    id = business["id"]

    photo = business["image_url"]
    print("--- Photo Link ---")
    print(photo+ "\n")

    url="https://api.yelp.com/v3/businesses/" + id + "/reviews"

    request = requests.get(url, headers=headers)

    parsed = json.loads(request.text)

    reviews = parsed["reviews"]

    print("--- Reviews ---")

    for review in reviews:
        print("User:", review["user"]["name"], "Rating:", review["rating"], "Review:", review["text"], "\n")

