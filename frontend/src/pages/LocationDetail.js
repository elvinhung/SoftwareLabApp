import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import '../styles/Location.css';
import '../styles/InstanceListing.css';
import PhotoCarousel from "../components/PhotoCarousel";
import RestaurantListing from "../components/RestaurantListing";
import HotelListing from "../components/HotelListing";

const imgUrl = "https://maps.googleapis.com/maps/api/place/photo?";
const api_key = "AIzaSyBJ2lOAHkcMp6O6SpyeRNcQ0jtjLqGpZnE";

const LocationDetail = (props) => {
  const id = props.match.params.id;
  const [location, setLocation] = useState({
    "name": "Houston",
    "restaurants": [
      {
        "review_count": 310,
        "name": [
          "Mico’s Hot Chicken"
        ],
        "price": [
          "$"
        ],
        "reviews": {
          "reviews": [
            {
              "text": "This place is LEGIT y'all!! \nNow that's a chicken sandwich ... \nColeslaw on point ... \nChicken on point ...\nEverythang y'all !!!",
              "user_name": "Vaping S.",
              "stars": 5
            },
            {
              "text": "Very good sandwich! \n\nI was about to give four stars then I gave five here's why. \n\nFood: The sandwich is really good. Very moist and full of flavor. The...",
              "user_name": "Rex C.",
              "stars": 5
            },
            {
              "text": "Finally got to try out Mico's at their new brick and mortar! They're still redoing the building, so they are operating out of the food truck, but they have...",
              "user_name": "Jeremy K.",
              "stars": 4
            }
          ]
        },
        "contact": "(713) 548-6081",
        "stars": [
          4
        ],
        "address": [
          [
            "1603 N Durham Dr",
            "Houston, TX 77008"
          ]
        ],
        "_id": {
          "$oid": "5e7fe60be36744f8cc254633"
        },
        "location_id": "HOU",
        "image": [
          "https://s3-media3.fl.yelpcdn.com/bphoto/y0D6eic32K0qGhJCWnXcwA/o.jpg"
        ]
      },
      {
        "review_count": 29,
        "name": [
          "Chick'nCone"
        ],
        "price": [
          "$$"
        ],
        "reviews": {
          "reviews": [
            {
              "text": "Great food with a twist! Chick'N Cone gets the chicken right by offering a bunch of sauce combos. They make chicken and waffles less messy by putting the...",
              "user_name": "amir b.",
              "stars": 5
            },
            {
              "text": "As a chicken-n-waffles whiz, I search far & wide for anything that combines the dynamic duo. I came across Chick'nCone the other day while driving by this...",
              "user_name": "Gustavo R.",
              "stars": 4
            },
            {
              "text": "This place is very family friendly, clean, welcoming. It is a 10 out of 10 for me. The quality of the food and service is un-real. The go out of their way...",
              "user_name": "Kimmberly L.",
              "stars": 5
            }
          ]
        },
        "contact": "(713) 965-7585",
        "stars": [
          4.5
        ],
        "address": [
          [
            "1919 N Shepherd Dr",
            "Houston, TX 77008"
          ]
        ],
        "_id": {
          "$oid": "5e7fe60be36744f8cc254634"
        },
        "location_id": "HOU",
        "image": [
          "https://s3-media1.fl.yelpcdn.com/bphoto/4WznTX2LkiDtrVQ-ALWnfQ/o.jpg"
        ]
      },
      {
        "review_count": 777,
        "name": [
          "Yoyo's Hot Dog"
        ],
        "price": [
          "$"
        ],
        "reviews": {
          "reviews": [
            {
              "text": "Everything about Yoyo's just screams 5 stars! I came here right about 8pm on Friday and there was already a line forming, wait was about 30 minutes. There's...",
              "user_name": "Anh N.",
              "stars": 5
            },
            {
              "text": "I came to Yoyo's to end a fun night of bar hopping around Houston, and it was exactly what I hoped for. \nYoyos is one of those places where you swear it's...",
              "user_name": "Christian A.",
              "stars": 3
            },
            {
              "text": "Obviously I am in the minority about Yo Yo's. So, because of that, I suggest you check it out and formulate your own opinion.\n\nMy husband and I were in the...",
              "user_name": "Elizabeth M.",
              "stars": 3
            }
          ]
        },
        "contact": "(713) 839-6207",
        "stars": [
          4.5
        ],
        "address": [
          [
            "5555 Morningside Dr",
            "Houston, TX 77005"
          ]
        ],
        "_id": {
          "$oid": "5e7fe60be36744f8cc254635"
        },
        "location_id": "HOU",
        "image": [
          "https://s3-media3.fl.yelpcdn.com/bphoto/TfX64197gXczdC48ccTj0A/o.jpg"
        ]
      }
    ],
    "longitude": -95.3698028,
    "photos": [
      {
        "photo_reference": "CmRaAAAAQBA6jtbKJHXVT5zW87ABkMYeCFMjvPLYSvcMp3z5AH4iL_t-hICofNdOx0T1ZZot0kbJkc79501TyPD8pQMqkYiAEA2P2_VWlBOusb-lXPM7wSTeGR6E83OaBqRr9ybeEhAOVDrlLNA8rrjvI0QYxkJPGhQdFXK5mzVQwuWbpd1zHKXfixzRUg",
        "width": 2048,
        "html_attributions": [
          "Victor Martin"
        ],
        "height": 1365
      }
    ],
    "latitude": 29.7604267,
    "_id": "HOU",
    "hotels": [
      {
        "name": "The Lancaster Hotel",
        "image": "http://multimediarepository.amadeus.com/cmr/retrieve/hotel/7AF8681D5B344933B7800FE8F9A31CB8",
        "contact": {
          "phone": "+1 713 2289500",
          "fax": "+1 713 2234528"
        },
        "stars": "4",
        "address": {
          "postalCode": "77002",
          "cityName": "HOUSTON",
          "lines": [
            "701 TEXAS AVENUE"
          ],
          "stateCode": "TX",
          "countryCode": "US"
        },
        "_id": {
          "$oid": "5e7e8ea593a16d5d9278b734"
        },
        "location_id": "HOU",
        "description": "The Lancaster Hotel is a historic luxury boutique hotel in the heart of Houstons vibrant downtown Theater District. The landmark hotel enjoys a legacy of nearly 100 years of providing exceptional service and hospitality. Newly renovated in 2018 and taking inspiration from the classic Regency style the redesigned hotel is accented with clean elegant lines and an intimate yet open floor plan. Guests of The Lancaster Hotel enjoy a daily inclusive gourmet breakfast buffet located on the Mezzanine. Our European-style breakfast spread includes smoked salmon fruit parfaits fresh baked goods as well as many breakfast classics like eggs bacon sausage oatmeal and more. Each of our 93 guestrooms and suites offer complimentary high-speed WiFi Frette linens Waterworks bath fixtures Bulgari bath amenities luxurious bathrobes and slippers Carrera marble in-room refrigerator and safe. Guests will also enjoy personalized stellar service with additional amenities that include car service within the downtown area in-room complimentary snacks and beverages Nespresso in-room coffee and turn down service. The Lancaster Collection of over 200 pieces of contemporary works of art by artists with strong ties to Texas is displayed throughout the guestrooms and public spaces. Our on-site fine dining restaurant Cultivated FB provides sophisticated contemporary American dishes and is the ideal respite for a meal with friends a power breakfast pre-theater dinner or post-performance nosh. Our recently added sidewalk dining area allows you to enjoy al fresco dining while immersed in the bustle of one of the nations largest theater districts. In addition to our on-site Cardio Fitness Room our guests enjoy complimentary access to nearby full-service fitness center."
      },
      {
        "name": "JW Marriott Houston Downtown",
        "image": "https://d2573qu6qrjt8c.cloudfront.net/13A1A70B89ED4CCD84CF002AC532DEC5/B.JPEG",
        "contact": {
          "phone": "+1 713 237-1111",
          "fax": "+1 713 237-8282",
          "email": "jelle.vandenbroucke@marriott.com"
        },
        "stars": "5",
        "address": {
          "postalCode": "77002",
          "cityName": "HOUSTON",
          "lines": [
            "806 MAIN STREET"
          ],
          "stateCode": "TX",
          "countryCode": "US"
        },
        "_id": {
          "$oid": "5e7e8ea593a16d5d9278b735"
        },
        "location_id": "HOU"
      },
      {
        "name": "The Whitehall Downtown Houston",
        "image": "http://multimediarepository.amadeus.com/cmr/retrieve/hotel/377E100D7833471BAD7C55EAA4162264",
        "contact": {
          "phone": "+1 713 7398800",
          "fax": "+1 713 7397307"
        },
        "stars": "5",
        "address": {
          "postalCode": "77002",
          "cityName": "HOUSTON",
          "lines": [
            "1700 SMITH STREET"
          ],
          "stateCode": "TX",
          "countryCode": "US"
        },
        "_id": {
          "$oid": "5e7e8ea593a16d5d9278b736"
        },
        "location_id": "HOU",
        "description": "Set in the heart of the Central Business District- the Whitehall Houston is a contemporary boutique-style property that offers an unparalleled location near leading leisure and business destinations such as Houstons Toyota Center- Rice University- and Minute Maid Park. Less than 1 mile from the George R. Brown Convention Center- our Downtown Houston hotel is within walking distance to fine dining and shopping- plus just 4 blocks from the Metro LightRail. Take advantage of complimentary shuttle service to all Downtown Houston destinations including the Convention Center -Toyota Center- Minute Maid Park- Houston Theatre District- as well as the Metro Light Rail Main Station."
      }
    ]
  });

  // api call for location information
  function getLocation() {
    const apiUrl = 'http://nomad.eba-xuhumcdw.us-east-2.elasticbeanstalk.com/locations/' + id;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // runs upon initial render
  useEffect(() => {
    //getLocation();

  }, []);

  return (
    <div>
      <Header />
      {Object.keys(location).length !== 0 &&
        <div>
          <div className="instance_head">
              <div>
                <PhotoCarousel
                  image={imgUrl + 'maxwidth=' + location.photos[0].width + '&photoreference=' + location.photos[0].photo_reference + '&key=' + api_key}
                />
              </div>
              <div className="instance_head_info">
                <h1>{location.name}</h1>
                <p>Lat. {location.latitude}</p>
                <p>Long. {location.longitude}</p>
              </div>
            </div>
            <div className="instance-content-container">
              <div className="listing-container">
                <div className="information"><p>Nearby Restaurants</p></div>
                {location.restaurants.map(restaurant => {
                  return (
                    <RestaurantListing restaurant={restaurant}/>
                  );
                })}
              </div>
              <div className="listing-container">
                <div className="information"><p>Nearby Hotels</p></div>
                {location.hotels.map(hotel => {
                  return (
                    <HotelListing hotel={hotel} />
                  );
                })}
              </div>
            </div>
          </div>
        }
      {Object.keys(location).length === 0 &&
        <div className="instance-content-container">
          <h3>Location not found</h3>
        </div>
      }
    </div>
  );
}

export default LocationDetail;