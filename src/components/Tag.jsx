import React from "react";

const Tag = ({ text, backgroundColor = "rgb(0, 0, 0,0.6)" }) => {
  return (
    <div className="tag" style={{ backgroundColor: `${backgroundColor}` }}>
      {text}
    </div>
  );
};

export default Tag;
