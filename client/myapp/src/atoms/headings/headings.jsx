import React from 'react';

const Headings = () => {
  const welcomeFontStyle = {
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 'auto',
    letterSpacing: '8%',
    color: 'white',
  
  };

  const nameFontStyle = {
    fontFamily: 'Poppins',
    fontSize: 86,
    lineHeight: '140.5%',
    letterSpacing: '0',
    color: 'white',
   
  };

  return (
    <div>
      <div style={welcomeFontStyle}>WELCOME TO AGRICULTURAL FARM</div>
      <div style={nameFontStyle}>FARMI-fi</div>
    </div>
  );
};

export default Headings;
