import { styled } from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 160px;
  margin-right: 160px;
  margin-top: 100px;
  gap: 80px;
`;

export const IntroTextContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 600px;
`;

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-weight: 48px;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};
`;

export const Description = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-weight: 20px;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: auto;
  gap: 40px;
`

export const IconAndTextContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 6px;
`

export const IconBaseImg = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

export const IconShoppingCart = styled(IconBaseImg)`
  background-color: ${(props) => props.theme["yellow-dark"]};
`

export const IconPacking = styled(IconBaseImg)`
  background-color: ${(props) => props.theme["base-text"]};
`

export const IconTimer = styled(IconBaseImg)`
  background-color: ${(props) => props.theme["yellow"]};
`

export const IconCoffee = styled(IconBaseImg)`
  background-color: ${(props) => props.theme["purple"]};
`
