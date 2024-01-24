import React, { useState } from "react";
import PropTypes from "prop-types";
import "./UserForm.css";

function UserForm({ onSubmit }) {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="label">
        GitHub Korisnik:
        <input
          className="input-field"
          type="text"
          value={username}
          onChange={handleChange}
        />
      </label>
      <button className="submit-button" type="submit">
        Pretraži
      </button>
    </form>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
