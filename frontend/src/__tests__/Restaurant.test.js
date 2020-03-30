import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import Restaurant from "../pages/Restaurant";

const restaurants = [
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
      render(<Restaurant/>, container);
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("renders RestaurantListings", async () => {
    await act(async () => {
      render(<Restaurant/>, container);
    });
    expect(container.getElementsByClassName('listing').length).toBe(restaurants.length);
  });

  it("renders restaurants title header", async () => {
    await act(async () => {
      render(<Restaurant/>, container);
    });
    expect(container.getElementsByClassName('model-header').length).toBe(1);
  })
});