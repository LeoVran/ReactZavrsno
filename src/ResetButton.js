import React from "react";
import PropTypes from "prop-types";

function ResetButton({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

ResetButton.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default ResetButton;
