import React from 'react';
import {Router, Route} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import RestaurantDetail from "../pages/RestaurantDetail";

const restaurant = {
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
  "location_id": "AUS",
  "hotels": []
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
      const history = createMemoryHistory();
      history.push('/restaurants/abc');
      render(
        <Router history={history}>
          <Route path="/restaurants/:id" component={RestaurantDetail}/>
        </Router>,
        container);
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("renders reviews", async () => {
    await act(async () => {
      const history = createMemoryHistory();
      history.push('/restaurants/abc');
      render(
        <Router history={history}>
          <Route path="/restaurants/:id" component={RestaurantDetail}/>
        </Router>, container);      });
    expect(container.getElementsByClassName("review").length).toBe(restaurant.reviews.reviews.length);
  });

  it("renders link to location", async () => {
    await act(async () => {
      const history = createMemoryHistory();
      history.push('/restaurants/abc');
      render(
        <Router history={history}>
          <Route path="/restaurants/:id" component={RestaurantDetail}/>
        </Router>, container);      });
    expect(container.getElementsByClassName("location_link")[0].href).toEqual(expect.stringContaining('/locations/' + restaurant.location_id.toLowerCase()));
  });

  it("renders restaurant name", async () => {
    await act(async () => {
      const history = createMemoryHistory();
      history.push('/restaurants/abc');
      render(
        <Router history={history}>
          <Route path="/restaurants/:id" component={RestaurantDetail}/>
        </Router>, container);      });
    expect(container.getElementsByClassName("instance_head_info")[0].children[0].textContent).toEqual(restaurant.name[0]);
  });
});