import React from 'react';
import './Headings.css';

const Headings = (props) => {
  return (
    <div>
      <div className={props.className}>{props.text}</div>
    </div>
  );
};

export default Headings;

