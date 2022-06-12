import React from "react";
/* eslint react/prop-types: 0 */

const Watermark = ({ text }) => {
  return (
    <div className="watermark">
      <div className="watermark__line"></div>
      <h1 className="watermark__title"> {text} </h1>
    </div>
  );
};

export default Watermark;
