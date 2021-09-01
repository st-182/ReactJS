import React from "react";
import styled from "styled-components";

export const StyledSignIn = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(214, 233, 254, 0.8);
  margin: 10px;
  color: black;
  backdrop-filter: blur(10px);
  grid-column: span 6;
`;

const SignIn = () => {
  return (
    <StyledSignIn>
      <h2>SignIn</h2>
    </StyledSignIn>
  );
};

export default SignIn;
