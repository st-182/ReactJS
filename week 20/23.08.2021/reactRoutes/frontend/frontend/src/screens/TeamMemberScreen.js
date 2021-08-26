import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeamMember = () => {
  const { id } = useParams();
  console.log(id);
  const [teamMember, setTeamMember] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setTeamMember(response.data);
        setIsLoading(false); //Sequence is very important
      });
  }, []);
  // console.log(teamMember.address.street);
  return (
    <main>
      <h1>Team Members Page</h1>
      <ul>
        <li>{teamMember.name}</li>
        <li>{teamMember.email}</li>
        {/* <li>{teamMember.address.street}</li> */}
        <li>{teamMember.phone}</li>
      </ul>
    </main>
  );
};

export default TeamMember;
