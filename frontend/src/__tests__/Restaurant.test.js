import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import Restaurant from "../pages/Restaurant";

const restaurants = [
  {
    "reviews": {
      "reviews": [
        {
          "text": "Make a reservation, or walk in for 4:30-6:30pm happy hour. The deals on both food and drinks are really great.\n\nI recommend the truffle deviled eggs, duck...",
          "user_name": "Wendy L.",
          "stars": 5
        },
        {
          "text": "Came here on a weekday (Thursday night) with a reservation for 2 (but it was just me, the system apparently doesn't allow you to make reservation for just...",
          "user_name": "Ana D.",
          "stars": 3
        },
        {
          "text": "One of my friends was like, \"I'm retiring from yelp.\" And it got to me a little bit because we all take this way too seriously. Right now we are all about...",
          "user_name": "Alex S.",
          "stars": 4
        }
      ]
    },
    "review_count": 2668,
    "name": [
      "Salty Sow"
    ],
    "countryCode": "US",
    "tags": [
      [
        {
          "alias": "tradamerican",
          "title": "American (Traditional)"
        },
        {
          "alias": "gastropubs",
          "title": "Gastropubs"
        }
      ]
    ],
    "price": 2,
    "transactions": [
      "delivery"
    ],
    "cityName": "Austin",
    "priceStr": "$$",
    "contact": "(512) 391-2337",
    "link": "https://www.yelp.com/biz/salty-sow-austin?adjust_creative=g4UIAL1h4DjzlsIhwC1opg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g4UIAL1h4DjzlsIhwC1opg",
    "stars": [
      4.5
    ],
    "address": [
      [
        "1917 Manor Rd",
        "Austin, TX 78722"
      ]
    ],
    "images": [
      [
        "https://s3-media2.fl.yelpcdn.com/bphoto/yFj6wwAAfE2CUxj1GHw_kQ/o.jpg",
        "https://s3-media3.fl.yelpcdn.com/bphoto/MsAFRZZ15ByQP8a3_CmAXA/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/3w-mJI2AnYiEH_Ndcy4OEw/o.jpg"
      ]
    ],
    "_id": {
      "$oid": "5ea39d9aa6b5b7c919acd502"
    },
    "location_id": "AUS"
  },
  {
    "reviews": {
      "reviews": [
        {
          "text": "This is hands down the best valued meal near campus. Starting at just $5 (you can literally just hand a 5 dollar bill), you can choose from fish, pork, or...",
          "user_name": "Eliott L.",
          "stars": 5
        },
        {
          "text": "This is a food truck at its finest.\nThis is UT food culture at its finest.\nThis is Japanese food at its finest.\nThat last one is a fat lie, but either way,...",
          "user_name": "Aaron X.",
          "stars": 5
        },
        {
          "text": "The food truck is near University co-op, and it is really easy to find. I love how everything on the menu is cheap and taste amazing. I had the fish don...",
          "user_name": "Echo L.",
          "stars": 5
        }
      ]
    },
    "review_count": 193,
    "name": [
      "Don Japanese Kitchen"
    ],
    "countryCode": "US",
    "tags": [
      [
        {
          "alias": "foodtrucks",
          "title": "Food Trucks"
        },
        {
          "alias": "japanese",
          "title": "Japanese"
        }
      ]
    ],
    "price": 1,
    "transactions": [
      "delivery"
    ],
    "cityName": "Austin",
    "priceStr": "$",
    "contact": "",
    "link": "https://www.yelp.com/biz/don-japanese-kitchen-austin?adjust_creative=g4UIAL1h4DjzlsIhwC1opg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g4UIAL1h4DjzlsIhwC1opg",
    "stars": [
      4.5
    ],
    "address": [
      [
        "411 W 23rd",
        "Austin, TX 78705"
      ]
    ],
    "images": [
      [
        "https://s3-media1.fl.yelpcdn.com/bphoto/22lc-8I598rbDSTvyX0UaQ/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/RMu_NbbaH80ajypEcOTRiw/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/4r_I1nXNOUx0G1aV85_8ww/o.jpg"
      ]
    ],
    "_id": {
      "$oid": "5ea39d9aa6b5b7c919acd503"
    },
    "location_id": "AUS"
  },
  {
    "reviews": {
      "reviews": [
        {
          "text": "Delicious. These sandwiches were much larger than expected, bigger than your normal biscuit. Queen beak with bacon added was bomb and so was whatever my SO...",
          "user_name": "Desiree G.",
          "stars": 5
        },
        {
          "text": "Alright, darlings, grab your tea and sit a spell - I have an update to my review of utter disappointment.\nI went back one morning before this whole \"shelter...",
          "user_name": "Shani S.",
          "stars": 5
        },
        {
          "text": "This review is for the food only as I didn't get a chance to check this place out before shelter in place set in. I've been wanting to try this place out...",
          "user_name": "Sandi G.",
          "stars": 5
        }
      ]
    },
    "review_count": 659,
    "name": [
      "Bird Bird Biscuit"
    ],
    "countryCode": "US",
    "tags": [
      [
        {
          "alias": "breakfast_brunch",
          "title": "Breakfast & Brunch"
        },
        {
          "alias": "sandwiches",
          "title": "Sandwiches"
        }
      ]
    ],
    "price": 1,
    "transactions": [
      "pickup",
      "delivery"
    ],
    "cityName": "Austin",
    "priceStr": "$",
    "contact": "(512) 761-4922",
    "link": "https://www.yelp.com/biz/bird-bird-biscuit-austin-2?adjust_creative=g4UIAL1h4DjzlsIhwC1opg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g4UIAL1h4DjzlsIhwC1opg",
    "stars": [
      4.5
    ],
    "address": [
      [
        "2701 Manor Rd",
        "Austin, TX 78722"
      ]
    ],
    "images": [
      [
        "https://s3-media3.fl.yelpcdn.com/bphoto/U2bIIfDtUiCKZG4f1dVfpA/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/1fzmFgR94Mp9ifdKjjOHEg/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/CyXrvCdfQOiYe-hgmxVDhQ/o.jpg"
      ]
    ],
    "_id": {
      "$oid": "5ea39d9aa6b5b7c919acd501"
    },
    "location_id": "AUS"
  },
  {
    "reviews": {
      "reviews": [
        {
          "text": "7th Street Public Market is such a fun place to visit when you're in uptown Charlotte. We've been here twice, once for a pop up event, and once for dinner...",
          "user_name": "Jennifer P.",
          "stars": 5
        },
        {
          "text": "Love this place! \n\nI have been here many times over the years. What I love about this spot is that it has many options for food and it is conveniently place...",
          "user_name": "Austin W.",
          "stars": 4
        },
        {
          "text": "We stumbled into 7th Street Market in Charlotte since we parked near by. It's a smaller version of Grand Market in LA for example, an indoor market that...",
          "user_name": "Jo S.",
          "stars": 3
        }
      ]
    },
    "review_count": 243,
    "name": [
      "7th Street Public Market"
    ],
    "countryCode": "US",
    "tags": [
      [
        {
          "alias": "publicmarkets",
          "title": "Public Markets"
        },
        {
          "alias": "food_court",
          "title": "Food Court"
        }
      ]
    ],
    "price": 2,
    "transactions": [],
    "cityName": "Charlotte",
    "priceStr": "$$",
    "contact": "(704) 230-4346",
    "link": "https://www.yelp.com/biz/7th-street-public-market-charlotte?adjust_creative=g4UIAL1h4DjzlsIhwC1opg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=g4UIAL1h4DjzlsIhwC1opg",
    "stars": [
      4.5
    ],
    "address": [
      [
        "224 E 7th St",
        "Charlotte, NC 28202"
      ]
    ],
    "images": [
      [
        "https://s3-media2.fl.yelpcdn.com/bphoto/yTr36pQfhZ9oJHYXeAtF6w/o.jpg",
        "https://s3-media2.fl.yelpcdn.com/bphoto/HtnFc-7J1Mfvh90gYmpIEw/o.jpg",
        "https://s3-media1.fl.yelpcdn.com/bphoto/nZCIOd7eNYnfPrCNrSAQ1g/o.jpg"
      ]
    ],
    "_id": {
      "$oid": "5ea39f25014d21dc38e01c6d"
    },
    "location_id": "CLT"
  }
];

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(restaurants)
    })
  );
});

afterEach(() => {
  global.fetch.mockRestore();
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<Restaurant />",() => {
  it("should fetch restaurants", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Restaurant />
        </MemoryRouter>, container);
    });
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });

  it("renders RestaurantListings", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Restaurant />
        </MemoryRouter>, container);        });
    expect(container.getElementsByClassName('listing').length).toBe(restaurants.length);
  });

  it("renders restaurants title header", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Restaurant />
        </MemoryRouter>, container);        });
    expect(container.getElementsByClassName('model-header').length).toBe(1);
  })
});