import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import Hotel from "../pages/Hotel";

const hotels = [
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
];

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(hotels)
    })
  );
});

afterEach(() => {
  global.fetch.mockRestore();
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<Hotel />",() => {
  it("should fetch hotels", async () => {
    await act(async () => {
      render(<Hotel />, container);
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("renders HotelListings", async () => {
    await act(async () => {
      render(<Hotel />, container);
    });
    expect(container.getElementsByClassName('listing').length).toBe(hotels.length);
  });

  it("renders hotels title header", async () => {
    await act(async () => {
      render(<Hotel />, container);
    });
    expect(container.getElementsByClassName('model-header').length).toBe(1);
  })
});