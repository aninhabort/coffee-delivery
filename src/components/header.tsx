import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer, LocalUserContainer, LocalUserText, LogoContainer, LogoImg, LogoTextContainer, ShoppingCartContainer } from "../styles/header.styles";
import { defaultTheme } from "../styles/default";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImg src="/coffee-cup.png" alt="logo" />
        <LogoTextContainer>
          <p className="text-strong">Coffee</p>
          <p>Delivery</p>
        </LogoTextContainer>
      </LogoContainer>

      <LocalUserContainer>
        <MapPin size={20} weight="fill" color={defaultTheme["purple-dark"]}/>
        <LocalUserText>Vila Velha, ES</LocalUserText>
      </LocalUserContainer>

      <ShoppingCartContainer>
        <ShoppingCart size={20} color={defaultTheme["yellow-dark"]} weight="fill" />
      </ShoppingCartContainer>
    </HeaderContainer>
  );
};
