import React from "react";
import styled from "styled-components";
import { product } from "./MealsItem";
import { Button } from "../UI/Button";
import { ReactComponent as Icon } from "../../assets/icons/Vector (2).svg";

const Meals = () => {
  return (
    <>
      <MainContainer>
        <SecondContainer>
          {product.map((item) => (
            <>
              <Ul>
                <Division>
                  <TitleFood>{item.title}</TitleFood>
                  <AboutFood>{item.about}</AboutFood>
                  <PriceFood>${item.price}</PriceFood>
                </Division>
                <Items>
                  <Spacing>
                    <Amount>Amount</Amount>
                    <InputNumber type="number"></InputNumber>
                  </Spacing>
                  <div>
                    <Button
                      width="99px"
                      height="41px"
                      bgColor=" #8A2B06"
                      color="#fff"
                      fontSize="14px"
                      fontWeight="700"
                      hvColor="#7E2A0A"
                      actColor="#993108"
                      borderRadius="20px"
                      // display="flex"
                    >
                      <Icon /> <ContentBtn> Add</ContentBtn>
                    </Button>
                  </div>
                </Items>
              </Ul>
              <Line></Line>
            </>
          ))}
        </SecondContainer>
      </MainContainer>
    </>
  );
};
export default Meals;

const Line = styled.span`
  width: 959px;
  height: 0px;
  margin: 40px;
  display: flex;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 6px 12px rgba(36, 36, 36, 0.08);
`;

const MainContainer = styled.div`
  background-color: #383838;
  width: 100%;
  height: 799px;
  margin-top: -7px;
`;
const ContentBtn = styled.span`
  margin-left: 10px;
`;

const SecondContainer = styled.div`
  position: absolute;
  top: 670px;
  left: 99px;
  background-color: white;
  width: 1040px;
  height: 564px;
  border-radius: 16px;
`;

const Ul = styled.div`
  height: 60px;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  padding: 0 120px;
`;

const Amount = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: flex-end;
`;
const Division = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`;
const PriceFood = styled.h5`
  width: 67px;
  height: 30px;
  font-weight: 700;
  font-size: 20px;
  color: #ad5502;
`;
const TitleFood = styled.h3`
  height: 27px;
  font-weight: 600;
  font-size: 18px;
  color: #222222;
`;
const AboutFood = styled.p`
  width: 184px;
  height: 24px;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
`;
const InputNumber = styled.input`
  box-sizing: border-box;
  width: 60px;
  height: 32px;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
`;

const Spacing = styled.div`
  display: flex;
  gap: 20px;
`;
