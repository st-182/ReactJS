import React from "react";
import PropTypes from "prop-types";

const Notification = () => {
  return <div>This is alert</div>;
};

export default Notification;

Notification.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the Notification be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Notification contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Notification.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
