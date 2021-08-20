import React from "react";

const Button = ({ hasIcon }) => (
  <button>
    {hasIcon && (
      <img src="https://cdn.iconscout.com/icon/free/png-256/right-true-verify-perfect-trust-64-32776.png" />
    )}
    Some text
  </button>
);

export default Button;
