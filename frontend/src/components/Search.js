import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LocationFilters from "./LocationFilters";
import "../styles/Filters.css";
import "../styles/Search.css";

const searchTypes = [
  'All',
  'Location',
  'Restaurant',
  'Hotel'
];

const SearchFilterModal = (props) => {
  const {
    searchType,
    showFilter,
    handleFilterClose,
    handleFilterSave
  } = props;

  const Filters = () => {
    switch (searchType) {
      case 'Location':
        return <LocationFilters />
      case 'Restaurant':
        return <h1>rest</h1>
      case 'Hotel':
        return <h1>Hotel</h1>
      default:
        return <p>No additional filters</p>
    }
  }

  return (
    <Modal id="filter-modal" show={showFilter} onHide={handleFilterClose}>
      <Modal.Header closeButton>
        <Modal.Title>More Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Filters />
      </Modal.Body>
      <Modal.Footer>
        <Button id="filter-cancel-btn" className="search-filter-btn" onClick={handleFilterClose}>
          Cancel
        </Button>
        <Button id="filter-save-btn" onClick={handleFilterSave}>
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


const SearchTypeDropdown = (props) => {
  const {
    searchType,
    setSearchType
  } = props;

  return (
    <Dropdown>
      <Dropdown.Toggle id="search-toggle">{searchType}</Dropdown.Toggle>
      <Dropdown.Menu id="search-menu">
        {searchTypes.map((type) => (
          <Dropdown.Item
            key={type}
            onClick={() => setSearchType(type)}
          >
            {type}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

const Search = (props) => {
  const [searchType, setSearchType] = useState(props.type);
  const [showFilter, setShowFilter] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const [redirect, setRedirect] = useState({});

  useEffect(() => {
    switch (searchType) {
      case 'Location':
        setRedirect({
          pathname: '/locations',
          search: 'population=greater_than_10000&country=US'
        });
        break;
      case 'Restaurant':
        setRedirect({
          pathname: '/restaurants',
          search: 'rest'
        });
        break;
      case 'Hotel':
        setRedirect({
          pathname: '/hotels',
          search: 'hotel'
        });
        break;
      default:
        setRedirect({
          pathname: '/restaurants',
          search: 'res'
        });
    }
  }, [])

  const handleSubmit = () => setSearching(true);
  const handleFilterSave = () => {
    handleFilterClose();
  }
  const handleFilterClose = () => setShowFilter(false);
  const handleFilterShow = () => setShowFilter(true);

  return (
    <div>
      {isSearching &&
        <Redirect
          to={redirect}
        />
      }
      <div className="form-container">
        <input className="search-bar" placeholder="Search" type="text" />
        <button onClick={handleSubmit} className="search-btn"><i className="fa fa-search"></i></button>
      </div>
      <div className="filter-btn-container">
        <SearchTypeDropdown
          searchType={searchType}
          setSearchType={setSearchType}
        />
        <Button id="filter-btn" onClick={handleFilterShow}>More Filters</Button>
      </div>
      <SearchFilterModal
        searchType={searchType}
        showFilter={showFilter}
        handleFilterClose={handleFilterClose}
        handleFilterSave={handleFilterSave}
      />
    </div>
  );
}

export default Search;