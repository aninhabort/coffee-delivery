import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;

  margin-left: 160px;
  margin-right: 160px;
  margin-top: 32px;

  .text-strong {
    font-weight: bolder;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-flow: row;
  gap: 2px;
  align-items: center;
  flex: 1;
`;

export const LogoTextContainer = styled.div`
  display: flex;
  flex-flow: column;

  p {
    margin-bottom: 0;
    margin-top: 0;
  }
`

export const LogoImg = styled.img`
  width: 45px;
  height: 45px;
`;

export const LocalUserContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 2px;
  background: ${(props) => props.theme["purple-light"]};
  padding: 8px;
  height: 20px;
  border-radius: 5px;
  margin-right: 12px;
`;

export const LocalUserText = styled.p`
  color: ${(props) => props.theme["purple-dark"]};
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  background: ${(props) => props.theme["yellow-light"]};
  padding: 8px;
  height: 20px;
  border-radius: 5px;
`;
