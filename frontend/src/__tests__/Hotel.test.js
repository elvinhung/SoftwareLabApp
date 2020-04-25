import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import Hotel from "../pages/Hotel";
import Location from "../pages/Location";

const hotels = [
  {
    "name": "Element Austin Downtown",
    "countryCode": "US",
    "image": "https://d2573qu6qrjt8c.cloudfront.net/AF60BCD1AE6F48A5975E9C087ED1B2CD/B.JPEG",
    "cityName": "Austin",
    "swimming_pool": false,
    "contact": {
      "phone": "+1 512 473-0000",
      "fax": "+1 512 391-1723"
    },
    "stars": "4",
    "address": {
      "postalCode": "78701",
      "cityName": "AUSTIN",
      "lines": [
        "109 E 7TH STREET"
      ],
      "stateCode": "TX",
      "countryCode": "US"
    },
    "_id": {
      "$oid": "5ea399a30330200139c68794"
    },
    "location_id": "AUS",
    "description": "Immerse in the world-famous charm of Austin at Element Austin Downtown. Situated in the heart of downtown, only one block from the dining, entertainment and nightlife of 6th Street, our hotel is perfectly positioned to explore all that Austin has to offer. Ideal for extended stays, our well-appointed hotel rooms and suites feature fully-equipped kitchenettes, Heavenly Beds, free WiFi, Smart TVs and a contemporary, open-flow style. Stay near your conference at the Austin Convention Center, attend ACL at Zilker Park, or root on the Longhorns at the University of Texas. Start your day with local roasted coffee and fresh pastries at The Coffeehouse at Caroline, then after exploring the area, enjoy modern American fare at Caroline, our neighborhood restaurant. After dining, visit Upstairs at Caroline, our rooftop bar and gaming yard, or decompress with a workout in our modern, 24-hour fitness center. With our downtown Austin location and business center, our hotel is also the ideal choice for company gatherings."
  },
  {
    "name": "Aloft Austin Downtown",
    "countryCode": "US",
    "image": "https://d2573qu6qrjt8c.cloudfront.net/61ED99CA0AF04C2CA5A0A39962CC5131/B.JPEG",
    "cityName": "Austin",
    "swimming_pool": false,
    "contact": {
      "phone": "+1 512 476-2222",
      "fax": "+1 512 391-1723"
    },
    "stars": "4",
    "address": {
      "postalCode": "78701",
      "cityName": "AUSTIN",
      "lines": [
        "109A EAST 7TH ST"
      ],
      "stateCode": "TX",
      "countryCode": "US"
    },
    "_id": {
      "$oid": "5ea399a30330200139c68793"
    },
    "location_id": "AUS",
    "description": "Experience Texas' capital city like never before at Aloft Austin Downtown. Tucked within the popular 6th Street Entertainment District, our hotel places you just steps away from the area's best shopping, dining, and entertainment. The University of Texas at Austin is nearby, as is Zilker Metropolitan Park and Lady Bird Lake. Contemporary rooms offer smart design and perks like free Wi-Fi access, Smart TVS, ergonomic workspaces and The W's Bliss® Spa bath products. Many of our hotel accommodations also boast breathtaking views of downtown Austin from oversized windows. Break a sweat at re:charge℠ gym, grab a coffee and fresh baked pastry at Coffeehouse at Caroline, or drop in for a meal at Caroline, our inviting restaurant - then stake a spot at Upstairs at Caroline for drinks, games and more. Plan a meeting in one of our flexible spaces or a private dinner in the restaurant. Take time to explore downtown Austin while you're here, too; from incredible live music to great outdoor activities."
  },
  {
    "name": "INTERCONTINENTAL STEPHEN F AUS",
    "countryCode": "US",
    "image": "https://d2573qu6qrjt8c.cloudfront.net/EA7DF1BB322A44ADA93BA45D5A2241F6/B.JPEG",
    "cityName": "Austin",
    "swimming_pool": true,
    "contact": {
      "phone": "+1 512 4578800",
      "fax": "+1 512 4574218"
    },
    "stars": "5",
    "address": {
      "postalCode": "78701",
      "cityName": "AUSTIN",
      "lines": [
        "701 CONGRESS AVENUE"
      ],
      "stateCode": "TX",
      "countryCode": "US"
    },
    "_id": {
      "$oid": "5ea399a30330200139c68795"
    },
    "location_id": "AUS",
    "description": "Originally built in 1924 as the city's first high rise hotel, our rich history and luxurious accommodations offer a truly unique experience of Texas hospitality. Conveniently located in the heart of downtown Austin, next door to The Paramount Theatre, across the street from The Driskill, one block from the 6th Street Entertainment District, and a short walk from the Texas State Capital, Bullock Texas Sate History Museum, Blanton Museum of Art and all the other feature that make Austin the culture capital of Texas. Known to Austinite's as the Stephen F, our historic Art Deco fa?ade has been a famous landmark for more than 90 years. Unwind after a busy day in our of our comfortable rooms or suites, stay active in our health club featuring an indoor lap pool and hot tub then indulge in a handmade craft cocktail, tasty cuisine and a breathtaking view of the Capital from our Stephen F's Bar and terrace on our second floor. Treat yourself to the Club InterContinental where you can enjoy a deluxe breakfast buffet, items to order, daily champagne tea hour, and heave hors devours and beverages in the evening."
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
      render(
        <MemoryRouter>
          <Hotel />
        </MemoryRouter>, container);    });
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });

  it("renders HotelListings", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Hotel />
        </MemoryRouter>, container);    });
    expect(container.getElementsByClassName('listing').length).toBe(hotels.length);
  });

  it("renders hotels title header", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Hotel />
        </MemoryRouter>, container);    });
    expect(container.getElementsByClassName('model-header').length).toBe(1);
  })
});