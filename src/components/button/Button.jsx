import React from "react";

import "./Button.css";

const Button = ({ type, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
      {type}
    </button>
  );
};

export default Button;
