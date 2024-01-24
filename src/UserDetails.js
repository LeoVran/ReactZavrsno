import React from "react";
import PropTypes from "prop-types";

class UserDetails extends React.Component {
  render() {
    const { userData } = this.props;

    return (
      <div>
        {userData && (
          <>
            <img src={userData.avatar_url} alt="User Avatar" />
            <h2>{userData.name}</h2>
            <p>Location: {userData.location}</p>
            <p>Bio: {userData.bio}</p>
            <ul>
              {userData.repositories.map((repo) => (
                <li key={repo.id}>{repo.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

UserDetails.propTypes = {
  userData: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    repositories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

export default UserDetails;
