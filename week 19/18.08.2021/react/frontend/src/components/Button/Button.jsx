import React from "react";
import PropTypes from "prop-types";

const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  onClick,
  ...props
}) => {
  let mode = primary ? "primary" : "secondary";
  return (
    <div>
      <button
        className={["button", "size", mode].join(" ")}
        style={backgroundColor && { backgroundColor }}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: "medium",
  onClick: undefined,
  label: "See this?",
};
