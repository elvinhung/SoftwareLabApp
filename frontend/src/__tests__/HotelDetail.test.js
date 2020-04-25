import React from 'react';
import {Router, Route} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import HotelDetail from "../pages/HotelDetail";

const hotel = {
  "name": "SBH - SOUTH BEACH HOTEL",
  "countryCode": "US",
  "image": "http://multimediarepository.amadeus.com/cmr/retrieve/hotel/E4D23D19C9A44E839DFD1314C01E7697",
  "cityName": "Miami",
  "swimming_pool": true,
  "contact": {
    "phone": "1-305-5313464",
    "fax": "1-305-5327141"
  },
  "stars": "3",
  "address": {
    "postalCode": "33139",
    "cityName": "MIAMI BEACH",
    "lines": [
      "236 21ST STREET"
    ],
    "stateCode": "FL",
    "countryCode": "US"
  },
  "_id": {
    "$oid": "5ea399490330200139c68758"
  },
  "location_id": "MIA",
  "restaurants": []
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
      const history = createMemoryHistory();
      history.push('/hotels/abc');
      render(
        <Router history={history}>
          <Route path="/hotels/:id" component={HotelDetail}/>
        </Router>, container);
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("renders description", async () => {
    await act(async () => {
      const history = createMemoryHistory();
      history.push('/hotels/abc');
      render(
        <Router history={history}>
          <Route path="/hotels/:id" component={HotelDetail}/>
        </Router>, container);    });
    expect(container.getElementsByClassName("hotel_right_info")[0].children[0].textContent).toEqual(hotel.description);
  });

  it("renders link to location", async () => {
    await act(async () => {
      const history = createMemoryHistory();
      history.push('/hotels/abc');
      render(
        <Router history={history}>
          <Route path="/hotels/:id" component={HotelDetail}/>
        </Router>, container);
    });
    expect(container.getElementsByClassName("location_link")[0].href).toEqual(expect.stringContaining('/locations/' + hotel.location_id.toLowerCase()));
  });

  it("renders hotel name", async () => {
    await act(async () => {
      const history = createMemoryHistory();
      history.push('/hotels/abc');
      render(
        <Router history={history}>
          <Route path="/hotels/:id" component={HotelDetail}/>
        </Router>, container);    });
    expect(container.getElementsByClassName("instance_head_info")[0].children[0].textContent).toEqual(hotel.name);
  });
});