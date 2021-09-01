import React from "react";
import styled from "styled-components";

export const StyledContent = styled.div`
  /* padding: 20px; */
  height: 100%;
  border-radius: 10px;
  background-color: rgba(234, 237, 240, 0.8);
  margin: 10px;
  color: black;
  backdrop-filter: blur(10px);
  grid-column: span 6;
  grid-row: span 2;
  align-self: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = () => {
  return (
    <StyledContent>
      <h2>Content</h2>
    </StyledContent>
  );
};

export default Content;
