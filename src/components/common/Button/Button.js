import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, name, id, classNames, styles, onClick }) => {
  return (
    <button
      name={name}
      id={id}
      className={classNames}
      style={styles}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  classNames: PropTypes.string.isRequired,
  styles: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  styles: {},
};

export default Button;
