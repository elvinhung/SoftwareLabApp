Endpoints: 
/restaurants
/restaurants/id
/hotels
/hotels/id
/locations
/locations/id

Search params:

Generic:
q = Query to Search (Optional)
sort = -1 (descending) or 1 (ascending)

Hotel-Specific Params:
stars: return all docs with star rating greater than or equal to param
location_id: match docs with provided location_id
swimming_pool: true or false
sortBy: stars, name

Restaurant-Specific Params:
rating
location_id
price
tags
transactions
sortBy: price, rating, name

Location-Specific Params:
country
sortBy: country