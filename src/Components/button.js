import React from "react";

const Button = ({ type }) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        {type}
      </button>
    </div>
  );
};

export default Button;
