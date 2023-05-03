import React from "react";
import styled from "styled-components";

const MealSummaryCard = () => {
  return (
    <Container>
      <h3>Delicious Food, delivered to you</h3>
      <Paragraph>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Paragraph>
      <Paragraph>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </Paragraph>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 854px;
  height: 270px;
  left: 200px;
  top: 358px;
  padding: 40px;
  height: 270px;
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: white;
  }
`;
const Paragraph = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 35px;
  text-align: center;
  color: white;
`;
export default MealSummaryCard;
