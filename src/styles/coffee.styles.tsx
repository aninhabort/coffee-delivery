import { styled } from "styled-components";

export const CoffeeContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme["base-card"]};
  height: fit-content;
  width: 256px;
  margin-top: 42px;
  padding: 10px;
  border-radius: 6px 36px;
  text-align: center;

  img {
    width: 120px;
    height: 120px;
  }
`;

export const CoffeeTypeTags = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 4px;
  margin-bottom: 2px;

  p {
    background-color: ${(props) => props.theme["yellow-light"]};
    width: fit-content;
    padding: 5px 10px;
    border-radius: 100px;

    font-family: "Roboto", sans-serif;
    font-weight: bold;
    line-height: 130%;
    font-size: 10px;
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  line-height: 130%;
  font-size: 20px;
  color: ${(props) => props.theme["base-title"]};
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-weight: 400;
  line-height: 130%;
  font-size: 14px;
  color: ${(props) => props.theme["base-label"]};
  margin-top: 0;
  margin-bottom: 26px;
`;

export const BuyProductContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
  gap: 23px;
`;

export const Price = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 130%;
  font-size: 14px;
  color: ${(props) => props.theme["base-text"]};
  margin-bottom: 16px;

  span {
    font-weight: 800;
    font-size: 24px;
  }
`;

export const QuantityAndShopContainer = styled.div`
  display: flex;
  flex-flow: row;
  gap: 8px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-flow: row;
  gap: 4px;
  background: ${(props) => props.theme["base-button"]};
  width: 72px;
  height: 38px;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;

  button {
    border: none;
    background: none;
    color: ${(props) => props.theme["purple"]};
  }
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  background: ${(props) => props.theme["purple-dark"]};
  padding: 8px;
  height: 20px;
  border-radius: 5px;
`;
