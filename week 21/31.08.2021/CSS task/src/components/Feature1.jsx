import React from "react";
import styled from "styled-components";

export const StyledFeature = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(245, 207, 142, 0.8);
  margin: 10px;
  color: black;
  backdrop-filter: blur(10px);
  grid-column: span 6;
`;

const Feature1 = () => {
  return (
    <StyledFeature>
      <h2>Feature</h2>
    </StyledFeature>
  );
};

export default Feature1;
