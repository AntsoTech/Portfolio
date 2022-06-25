import React from "react";
/* eslint react/prop-types: 0 */

const Tag = ({ text, backgroundColor = "rgb(0, 0, 0,0.4)" }) => {
  return (
    <div className="tag" style={{ backgroundColor: `${backgroundColor}` }}>
      {text}
    </div>
  );
};

export default Tag;
