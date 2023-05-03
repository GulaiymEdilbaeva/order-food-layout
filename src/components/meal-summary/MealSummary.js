import React from "react";
import styled from "styled-components";
import summeryImage from "../../assets/img/pexels-alexy-almond-3756523 1.png";
import MealSummaryCard from "./MealSummaryCard";
const MealSummary = () => {
  return (
    <Container>
      <ImageContainer src={summeryImage} alt="summery"></ImageContainer>
      <MealSummaryCard></MealSummaryCard>
    </Container>
  );
};

const Container = styled.div``;

const ImageContainer = styled.img`
  width: 100%;
  height: 432px;
`;
export default MealSummary;
