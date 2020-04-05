import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import HotelDetail from "../pages/HotelDetail";

const hotel = {
  "name": "The Lancaster Hotel",
  "image": "http://multimediarepository.amadeus.com/cmr/retrieve/hotel/7AF8681D5B344933B7800FE8F9A31CB8",
  "restaurants": [],
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
};

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(hotel)
    })
  );
});

afterEach(() => {
  global.fetch.mockRestore();
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<HotelDetail />",() => {
  it("should fetch hotel", async () => {
    await act(async () => {
      render(<HotelDetail match={{params: {id: 1}}} />, container);
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("renders description", async () => {
    await act(async () => {
      render(<HotelDetail match={{params: {id: 1}}} />, container);
    });
    expect(container.getElementsByClassName("hotel_right_info")[0].children[0].textContent).toEqual(hotel.description);
  });

  it("renders link to location", async () => {
    await act(async () => {
      render(<HotelDetail match={{params: {id: 1}}} />, container);
    });
    expect(container.getElementsByClassName("location_link")[0].href).toEqual(expect.stringContaining('/locations/' + hotel.location_id));
  });

  it("renders hotel name", async () => {
    await act(async () => {
      render(<HotelDetail match={{params: {id: 1}}} />, container);
    });
    expect(container.getElementsByClassName("instance_head_info")[0].children[0].textContent).toEqual(hotel.name);
  });
});