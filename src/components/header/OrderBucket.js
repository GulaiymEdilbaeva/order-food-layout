import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Group.svg";
const OrderBucket = ({ children }) => {
  return (
    <Button>
      <BasketIcon /> <OrderBusketTitle>{children}</OrderBusketTitle>
      <OrderBusketCount>7</OrderBusketCount>
    </Button>
  );
};
export default OrderBucket;

const Button = styled.button`
  width: 249px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5a1f08;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #8a2b06;
  }
`;

const OrderBusketTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
  margin-left: 13px;
`;

const OrderBusketCount = styled.span`
  background-color: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
  margin-left: 10px;
  color: white;
`;
