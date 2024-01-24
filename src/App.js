import React, { useState } from "react";
import axios from "axios";
import UserForm from "./UserForm";
import UserDetails from "./UserDetails";
import ResetButton from "./ResetButton";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUsernameSubmit = async (newUsername) => {
    setLoading(true);

    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${newUsername}`
      );
      const userRepositoriesResponse = await axios.get(
        `https://api.github.com/users/${newUsername}/repos`
      );

      const userRepositories = userRepositoriesResponse.data.map((repo) => ({
        id: repo.id,
        name: repo.name,
      }));

      setUserData({
        avatar_url: userResponse.data.avatar_url,
        name: userResponse.data.name,
        location: userResponse.data.location,
        bio: userResponse.data.bio,
        repositories: userRepositories,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUsername("");
    setUserData(null);
  };

  return (
    <div className="App">
      <h1>Github pretraživanje korisnika</h1>
      <UserForm onSubmit={handleUsernameSubmit} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        userData && (
          <div>
            <UserDetails userData={userData} />
            <ResetButton onReset={handleReset} />
          </div>
        )
      )}
    </div>
  );
}

export default App;
