import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  Description,
  IconAndTextContainer,
  IconCoffee,
  IconPacking,
  IconShoppingCart,
  IconTimer,
  IntroContainer,
  IntroTextContainer,
  ItemsContainer,
  Title,
} from "../styles/intro.styles";

export const IntroOfThePage = () => {
  return (
    <IntroContainer>
      <IntroTextContainer>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Description>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Description>

        <ItemsContainer>
          <div>
            <IconAndTextContainer>
              <IconShoppingCart>
                <ShoppingCart />
              </IconShoppingCart>
              <p>Compra simples e segura</p>
            </IconAndTextContainer>

            <IconAndTextContainer>
              <IconTimer>
                <Timer />
              </IconTimer>
              <p>Entrega rápida e rastreada</p>
            </IconAndTextContainer>
          </div>

          <div>
            <IconAndTextContainer>
              <IconPacking>
                <Package />
              </IconPacking>
              <p>Embalagem mantém o café intacto</p>
            </IconAndTextContainer>
            
            <IconAndTextContainer>
              <IconCoffee>
                <Coffee />
              </IconCoffee>
              <p>O café chega fresquinho até você</p>
            </IconAndTextContainer>
          </div>
        </ItemsContainer>
      </IntroTextContainer>

      <img src="../intro-cup-img.png" alt="Imagem de um copo com a logo" />
    </IntroContainer>
  );
};
