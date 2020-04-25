import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import Location from "../pages/Location";

const locations = [
  {
    "population": [
      678368
    ],
    "name": "Austin",
    "location_id": "AUS",
    "restaurants": [],
    "longitude": -97.7430608,
    "photos": [
      {
        "photo_reference": "CmRZAAAA1woeTPAv0U7pSS8SAf5dcTww_F9FHcztqfAT7AUv1JmXZEnEHKHTLMDt89IPH9IxVwCXh-_qqBt6Ihg6QSwCHAuCNoESTyiGrTQYbLAN8qcNXQ8Z-8JjlXiVb4DX9fo7EhArHyjq72W4lxQsNDjm_QOeGhSzYA1KeYd9Hl6PnnfRD2VsNXmAlA",
        "width": 4160,
        "html_attributions": [
          "Raul Castillo"
        ],
        "height": 2340
      }
    ],
    "weather": [
      {
        "week_forecast": [
          "80.18 °F",
          "86.95 °F",
          "77.39 °F",
          "79.03 °F",
          "80.49 °F",
          "80.72 °F",
          "85.53 °F",
          "80.53 °F"
        ],
        "city": "Austin",
        "country": "US",
        "current": {
          "current wind speed": "4.1 m/s",
          "current description": "clear sky",
          "current feel": "75.52 °F",
          "current humidity": "37%",
          "current temp": "80.18 °F"
        },
        "_id": {
          "$oid": "5ea2366f37863db8240b371e"
        },
        "location_id": "AUS"
      }
    ],
    "country": "US",
    "latitude": 30.267153,
    "_id": {
      "$oid": "5ea38c12cb1bdbf4041e59dc"
    },
    "points of interest": [],
    hotel: [],
  },
  {
    "population": [
      4612187
    ],
    "name": "Toronto",
    "location_id": "YTO",
    "restaurants": [],
    "longitude": -79.3831843,
    "photos": [
      {
        "photo_reference": "CmRaAAAAoBxEiGbrFYr-bD0e3wPtrZQXMfWu8aEx-9VauMaDB9Ft_D8OJOa2JNMyy61c5Q1bTK-Uh_nzkk2sx8jJJqvKg8um64mL6b6PxrWR4VOo9UQ55atElwpxMXrjh_Vn94edEhCozfFmV-KEl8NpYmHwzmIoGhQx58GjJ92SKipmMiMVNddSRaLU4Q",
        "width": 3354,
        "html_attributions": [
          "Subash Adigal"
        ],
        "height": 2025
      }
    ],
    "weather": [
      {
        "week_forecast": [
          "38.89 °F",
          "49.35 °F",
          "45.91 °F",
          "40.84 °F",
          "42.17 °F",
          "50.32 °F",
          "52.99 °F",
          "45.17 °F"
        ],
        "city": "Toronto",
        "country": "CA",
        "current": {
          "current wind speed": "6.7 m/s",
          "current description": "overcast clouds",
          "current feel": "26.11 °F",
          "current humidity": "60%",
          "current temp": "38.89 °F"
        },
        "_id": {
          "$oid": "5ea2366f37863db8240b3737"
        },
        "location_id": "YTO"
      }
    ],
    "country": "CA",
    "latitude": 43.653226,
    "_id": {
      "$oid": "5ea38c12cb1bdbf4041e59f5"
    },
    "points of interest": [],
    "hotels": [],
  }
];

let container = null;

beforeEach(() => {
  container = document.createElement('div');
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
  it("should fetch locations and location filters", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Location />
        </MemoryRouter>
        , container);
    });
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });

  it("renders LocationCards", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Location />
        </MemoryRouter>, container);
    });
    expect(container.getElementsByClassName('location-card').length).toBe(locations.length);
  });

  it("renders locations title header", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Location />
        </MemoryRouter>
        , container);
    });
    expect(container.getElementsByClassName('model-header').length).toBe(1);
  })
});