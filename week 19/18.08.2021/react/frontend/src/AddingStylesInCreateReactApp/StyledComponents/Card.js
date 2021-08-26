import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  padding: 10px;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
`;

const Card = () => {
  return (
    <Section>
      <Div>
        <img
          src="https://per4mmedia.com/wp-content/uploads/2021/03/35.jpg"
          alt=""
        />
      </Div>
      <Div>
        <h1>Hi!</h1>
      </Div>
    </Section>
  );
};

export default Card;
