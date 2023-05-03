import styled from "styled-components";
import OrderBucket from "./OrderBucket";

const Header = () => {
  return (
    <Container>
      <h1>ReactMeals</h1>
      <OrderBucket>your cart</OrderBucket>
    </Container>
  );
};

const Container = styled.div`
  height: 101px;
  width: 100%;
  background-color: #8a2b06;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export default Header;
