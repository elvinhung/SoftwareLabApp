import React from 'react';
import RestaurantListing from "../components/RestaurantListing";
import { shallow } from 'enzyme';

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
  ]
};

let wrapper;

beforeEach(() => {
  wrapper = shallow(<RestaurantListing restaurant={restaurant} />);
});

describe("<RestaurantListing />", () => {
  it("renders link to restaurant", () => {
    expect(wrapper.find('a').props().href).toEqual('/restaurants/' + restaurant._id.$oid);
  });

  it("renders image", () => {
    expect(wrapper.find('img').props().src).toEqual(restaurant.image[0]);
  });

  it("renders restaurant name", () => {
    expect(wrapper.find('.instance_name').text()).toEqual(expect.stringContaining(restaurant.name[0]));
  });

  it("renders ratings", () => {
    expect(wrapper.find('Ratings').length).toBe(1);
  });
});