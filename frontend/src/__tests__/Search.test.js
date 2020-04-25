import React from 'react';
import Search from "../components/Search";
import { shallow } from 'enzyme';

const filters = {
  "sort": "1",
  "sortBy": "name"
}

let wrapper;

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve()
    })
  );
  wrapper = shallow(<Search type="All" filters={filters} />);
});

afterEach(() => {
  global.fetch.mockRestore();
});

describe("<Search />", () => {
  it("renders search bar", () => {
    expect(wrapper.find('.search-bar')).toHaveLength(1);
  });

  it("renders search button", () => {
    expect(wrapper.find('.search-btn')).toHaveLength(1);
  });

  it("search bar value changes with user input", () => {
    wrapper.find('.search-bar').simulate('change', { target: { value: 'TEST' } });
    expect(wrapper.find('.search-bar').prop('value')).toEqual('TEST');
  });
});