import React from 'react';
import '../styles/SectionHeader.css';

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <h1 className="section-header-name">{props.name}</h1>
    </div>
  );
}

export default SectionHeader;