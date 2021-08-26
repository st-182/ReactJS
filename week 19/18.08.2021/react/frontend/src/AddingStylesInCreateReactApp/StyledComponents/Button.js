import React from "react";
import styled from "styled-components";

// const Button = styled.button`
// padding: 20px;
// border: 0;
// background-color: ${props.primary} ? "#000" : ${
//   props.secondary
// } ? "#eee" : "#ff0000";
// color: ${props.primary} ? "#fff" : ${props.secondary} ? "#000" : "#fff";
// background-color: ${({ primary, secondary }) =>
//   primary ? "black" : secondary ? "white" : "green"};
// `;

const Button = styled.button`
  padding: 20px;
  border: 0;
  border-radius: 10px;
  color: ${({ primary, secondary }) =>
    primary ? "#fff" : secondary ? "#000" : "#fff"};
  background-color: ${({ primary, secondary }) =>
    primary ? "black" : secondary ? "white" : "green"};
`;

const StyledButton = ({ text, action, primary, secondary }) => {
  return (
    <Button onClick={action} primary={primary} secondary={secondary}>
      {text}
    </Button>
  );
};

export default StyledButton;
