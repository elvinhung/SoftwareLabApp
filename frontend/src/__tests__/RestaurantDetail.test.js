import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import RestaurantDetail from "../pages/RestaurantDetail";

const restaurant = {
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
  ],
  "hotels": [],
};

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(restaurant)
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
  it("should fetch restaurant", async () => {
    await act(async () => {
      render(<RestaurantDetail match={{params: {id: 1}}} />, container);
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("renders reviews", async () => {
    await act(async () => {
      render(<RestaurantDetail match={{params: {id: 1}}} />, container);
    });
    expect(container.getElementsByClassName("review").length).toBe(restaurant.reviews.reviews.length);
  });

  it("renders link to location", async () => {
    await act(async () => {
      render(<RestaurantDetail match={{params: {id: 1}}} />, container);
    });
    expect(container.getElementsByClassName("location_link")[0].href).toEqual(expect.stringContaining('/locations/' + restaurant.location_id));
  });

  it("renders restaurant name", async () => {
    await act(async () => {
      render(<RestaurantDetail match={{params: {id: 1}}} />, container);
    });
    expect(container.getElementsByClassName("instance_head_info")[0].children[0].textContent).toEqual(restaurant.name[0]);
  });
});