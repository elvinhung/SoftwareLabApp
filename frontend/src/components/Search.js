import React, { useState } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../styles/Search.css";

const searchTypes = [
  'All',
  'Location',
  'Restaurant',
  'Hotel'
];

const SearchFilterModal = (props) => {

  const {
    showFilter,
    handleFilterClose,
  } = props;

  return (
    <Modal show={showFilter} onHide={handleFilterClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleFilterClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleFilterClose}>
          Save Changes
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

  const handleFilterClose = () => setShowFilter(false);
  const handleFilterShow = () => setShowFilter(true);

  return (
    <div>
      <div className="form-container">
        <input className="search-bar" placeholder="Anywhere" type="text" />
        <button className="search-btn"><i className="fa fa-search"></i></button>
      </div>
      <div className="filter-container">
        <SearchTypeDropdown
          searchType={searchType}
          setSearchType={setSearchType}
        />
        <Button id="filter-btn" onClick={handleFilterShow}>More Filters</Button>
      </div>
      <SearchFilterModal
        showFilter={showFilter}
        handleFilterClose={handleFilterClose}
      />
    </div>
  );
}

export default Search;