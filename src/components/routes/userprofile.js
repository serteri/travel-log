import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = ({ match }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/user/${match.params.username}`);
        setUser(res.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [match.params.username]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.username}'s Profile</h2>
      <div>
        <h3>My Locations</h3>
        {user.locations.map((location, index) => (
          <div key={index}>
            <h4>{location.name}</h4>
            <img src={location.picture} alt={location.name} />
            <p>{location.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
