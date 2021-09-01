import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 20px;
  border-radius: 10px;
  /* color: ${({ primary, secondary }) =>
    primary ? "#fff" : secondary ? "#000" : "#fff"};
  background-color: ${({ primary, secondary }) =>
    primary ? "black" : secondary ? "white" : "green"}; */
  background-color: rgba(178, 214, 255, 0.8);
  margin: 10px;
  backdrop-filter: blur(10px);
  color: black;
  grid-column: span 3;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h2>Header</h2>
    </StyledHeader>
  );
};

export default Header;
