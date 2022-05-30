import React from "react";

const Watermark = ({ text }) => {
  return (
    <div className="watermark">
      <h1 className="watermark__title"> {text} </h1>
    </div>
  );
};

export default Watermark;
