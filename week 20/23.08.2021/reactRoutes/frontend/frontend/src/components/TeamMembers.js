import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./Member";
const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setTeamMembers(response.data);
      setIsLoading(false);
    });
    return () => {};
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>
          {teamMembers.map((user) => (
            <User user={user} id={user.id} />
          ))}
        </p>
      )}
    </div>
  );
};

export default TeamMembers;
