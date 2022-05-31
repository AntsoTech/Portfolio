import React from "react";
/* eslint react/prop-types: 0 */

const Watermark = ({ text }) => {
  return (
    <div className="watermark">
      <h1 className="watermark__title"> {text} </h1>
    </div>
  );
};

export default Watermark;
