import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import Location from "../pages/Location";

const locations = [
  {
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
  },
  {
    "name": "Miami",
    "restaurants": [
      {
        "review_count": 1141,
        "name": [
          "Shiver's Bar-B-Q"
        ],
        "price": [
          "$$"
        ],
        "reviews": {
          "reviews": [
            {
              "text": "Great BBQ place! There is a little wait but worth it.\nTrue BBQ at its finest! The portions are big! We got ribs, brisket burnt ends. The sides were...",
              "user_name": "James S.",
              "stars": 5
            },
            {
              "text": "Good brisket sandwich and hash brown casserole. Horrible collards and frozen French fries. I'd suggest a better southern collards recipe like Lady and...",
              "user_name": "Tad H.",
              "stars": 2
            },
            {
              "text": "This is probably the best BBQ place in south Florida area. \n\nClean restaurant and super nice and friendly service.\nI have been here lots of time but my...",
              "user_name": "Ed W.",
              "stars": 4
            }
          ]
        },
        "contact": "(305) 248-2272",
        "stars": [
          4.5
        ],
        "address": [
          [
            "28001 S Dixie Hwy",
            "Homestead, FL 33033"
          ]
        ],
        "_id": {
          "$oid": "5e7fe613e36744f8cc254636"
        },
        "location_id": "MIA",
        "image": [
          "https://s3-media1.fl.yelpcdn.com/bphoto/e5g0OgLdeWWWdQrNZEds5w/o.jpg"
        ]
      },
      {
        "review_count": 845,
        "name": [
          "World Famous House of Mac"
        ],
        "price": [
          "$$"
        ],
        "reviews": {
          "reviews": [
            {
              "text": "Ordered this via door dash for the first time. I got the Jerk Chicken Pasta, and Housemade Fruit Punch. \n\nOnce it arrived I WAS NOT DISAPPOINTED. The pasta...",
              "user_name": "Jasmin F.",
              "stars": 5
            },
            {
              "text": "I order take out, delivery and dine here. I guess that makes me a big fan? LOL \n\nI've tried a few of their Mac and Cheese, Jerk Chicken, Shrimp, 5 cheese,...",
              "user_name": "Paulet D.",
              "stars": 4
            },
            {
              "text": "Holy. Crap. The food here is SO good!! The only negative was the wait time but honestly, once you get it, it's amazingggg. Perfect comfort food for any...",
              "user_name": "Rujaine M.",
              "stars": 5
            }
          ]
        },
        "contact": "(786) 636-6967",
        "stars": [
          4.5
        ],
        "address": [
          [
            "2055 NW 2nd Ave",
            "Miami, FL 33127"
          ]
        ],
        "_id": {
          "$oid": "5e7fe613e36744f8cc254637"
        },
        "location_id": "MIA",
        "image": [
          "https://s3-media2.fl.yelpcdn.com/bphoto/rtr4VUbftaculXVtnJD8fg/o.jpg"
        ]
      },
      {
        "review_count": 1196,
        "name": [
          "1-800-Lucky"
        ],
        "price": [
          "$$"
        ],
        "reviews": {
          "reviews": [
            {
              "text": "Go to Friday night spot for late dinner and beats. \n\nOscar G is resident DJ here and always has the right vibe going. \n\nBig fan of the Thai place that has...",
              "user_name": "Edward C.",
              "stars": 5
            },
            {
              "text": "First time at this place to try out their variety of food. I gotta say this place gives a good vibe, especially if you're going with your friends. Got the...",
              "user_name": "Cat K.",
              "stars": 4
            },
            {
              "text": "Upbeat asian food-hall, both indoor and outdoor seating, generally younger crowd and remixed pop / hip hop music in the evenings. \n\nTried a bunch of items,...",
              "user_name": "Nirali S.",
              "stars": 4
            }
          ]
        },
        "contact": "(305) 768-9826",
        "stars": [
          4
        ],
        "address": [
          [
            "143 NW 23rd St",
            "Miami, FL 33127"
          ]
        ],
        "_id": {
          "$oid": "5e7fe613e36744f8cc254638"
        },
        "location_id": "MIA",
        "image": [
          "https://s3-media2.fl.yelpcdn.com/bphoto/KEKGJuGGUZgwNWNXtaMWqA/o.jpg"
        ]
      }
    ],
    "longitude": -80.1917902,
    "photos": [
      {
        "photo_reference": "CmRaAAAAyjIaiCIHF9sc8m1Qcu6C2SwNoy7pZ2LJhCCnqezmnsmKa8KarqG2ByYGWcP3qxMlsTKf9qYJZZ_w-rkzdp3X4CVGNSHslrNEQizI0TGDABLUK80imAkl7zLW5-GXH9YMEhCJg0M9EO5vLEVgQ_VOI5KTGhRLrCCn7qkuYBRDptmC0WSOFYXtRQ",
        "width": 960,
        "html_attributions": [
          "Alonso Guerrero"
        ],
        "height": 649
      }
    ],
    "latitude": 25.7616798,
    "_id": "MIA",
    "hotels": [
      {
        "name": "Lennox Miami Beach",
        "image": "https://d2573qu6qrjt8c.cloudfront.net/1C3C67AFBAB3437AA3DF87AA044C3B87/B.JPEG",
        "contact": {
          "phone": "+1 305 5316800",
          "fax": "+1 305 5316800"
        },
        "stars": "5",
        "address": {
          "postalCode": "33139 ",
          "cityName": "MIAMI",
          "lines": [
            "1900 COLLINS AVENUE "
          ],
          "stateCode": "FL",
          "countryCode": "US"
        },
        "_id": {
          "$oid": "5e7e8ea993a16d5d9278b737"
        },
        "location_id": "MIA"
      },
      {
        "name": "The Plymouth South Beach",
        "image": "https://d2573qu6qrjt8c.cloudfront.net/37B6E1394DC94448AD6E03BECADE8851/B.JPEG",
        "contact": {
          "phone": "+1 305 6025000",
          "fax": "+1 305 3972274"
        },
        "stars": "5",
        "address": {
          "postalCode": "33139",
          "cityName": "MIAMI BEACH",
          "lines": [
            "336 21ST STREET"
          ],
          "stateCode": "FL",
          "countryCode": "US"
        },
        "_id": {
          "$oid": "5e7e8ea993a16d5d9278b738"
        },
        "location_id": "MIA",
        "description": "A golden-age retreat in sunny South Beach. Mirroring its stylish \rsurroundings The Plymouth South Beqach is a revived Art Moderne gem in historic Collins Park. With four storeys of custom-designed class courtesy of Fernando Santangelo this boutique hotel brings a slice of 1940s South of France to South Beach Miami. Here you can lounge around in your luxury robe in the comfort of your classic suite - or even on your own private terrace. During the day take a walk along sugar-white sand to Plymouth Beach where exclusive loungers are for hotel guests only. Or stay close to home under a peaches-and-cream parasol beside the pool. Whether you venture down to the Plymouth Cafe sample the art of sushi at Blue Ribbon or tuck yourself in with 24-hour in-room dining you will have all you need without leaving the Plymouth. That said - exploring will be hard to resist. By day South Beach is a beacon of upscale culture. Drop in to art galleries find famous sculptures like the Miami Mountain and even take a trip to the Botanical Garden. Then see South Beach really come to life when the sun goes down. The city is known for its nightlife and the Plymouth is surrounded by fine dining restaurants bustling bars and nightclubs. The Plymouth South Beach is a Small Luxury Hotels of the World of property. \rNEAR THE PLYMOUTH \rCollins Avenue Miami Beach Convention Centre fine dining restaurants Latin-American bars Lincoln Road Mall and Restaurants the famous Bass Museum of Art Miami City Ballet New World Symphony and Miami Beach Botanical Garden."
      },
      {
        "name": "AXELBEACH MIAMI SOUTH BEACH",
        "image": "https://d2573qu6qrjt8c.cloudfront.net/28E330F90F4842D8B715A1464170D23F/B.JPEG",
        "contact": {
          "phone": "13055311251",
          "fax": "13055311251"
        },
        "stars": "4",
        "address": {
          "postalCode": "33139",
          "cityName": "MIAMIBEACH",
          "lines": [
            "1500 COLLINS AVE SOUTH BEACH "
          ],
          "stateCode": "FL",
          "countryCode": "US"
        },
        "_id": {
          "$oid": "5e7e8ea993a16d5d9278b739"
        },
        "location_id": "MIA"
      }
    ]
  }
];

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(locations)
    })
  );
});

afterEach(() => {
  global.fetch.mockRestore();
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<Location />",() => {
  it("should fetch locations", async () => {
    await act(async () => {
      render(<Location />, container);
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("renders LocationCards", async () => {
    await act(async () => {
      render(<Location />, container);
    });
    expect(container.getElementsByClassName('location-card').length).toBe(locations.length);
  });

  it("renders locations title header", async () => {
    await act(async () => {
      render(<Location />, container);
    });
    expect(container.getElementsByClassName('model-header').length).toBe(1);
  })
});