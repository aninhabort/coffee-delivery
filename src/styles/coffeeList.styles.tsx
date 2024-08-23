import { styled } from "styled-components";

export const CoffeeListComponent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: start;
  margin-left: 160px;
  margin-right: 160px;
  margin-top: 80px;
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  line-height: 130%;
  font-size: 32px;
  color: ${(props) => props.theme["base-title"]};
  margin-bottom: 16px;
`;

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 32px;
`;
