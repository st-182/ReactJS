import React from "react";
import styled from "styled-components";
import StyledButton from "./Button";

const Section = styled.section`
  padding: 25px;
  background-color: #dc143c96;
`;
const SectionTitle = styled.h2`
  text-aline: center;
`;

const StyledHero = () => {
  return (
    <Section>
      <SectionTitle>Hello World</SectionTitle>
      <StyledButton text="Wow" action={() => console.log(`WOW!`)} />
      <StyledButton text="Wow" action={() => console.log(`WOW!`)} primary />
      <StyledButton text="Wow" action={() => console.log(`WOW!`)} secondary />
    </Section>
  );
};

export default StyledHero;
