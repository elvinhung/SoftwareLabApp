import React from 'react';

const LocationInstance = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      {id}
    </div>
  );
}

export default LocationInstance;