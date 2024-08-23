import { ShoppingCart } from "phosphor-react";
import {
  BuyProductContainer,
  CoffeeContainer,
  CoffeeTypeTags,
  Description,
  Price,
  QuantityAndShopContainer,
  QuantityContainer,
  ShoppingCartContainer,
  Title,
} from "../styles/coffee.styles";
import { CoffeeType } from "../data";
import { useState } from "react";

export const Coffee = ({ title, description, img, price, tags }: CoffeeType) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <CoffeeContainer>
      <img src={img} alt="coffee type" />
      <CoffeeTypeTags>
        {tags.map(item => {
          return (
            <p>{item.toUpperCase()}</p>
          )
        })}
      </CoffeeTypeTags>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <BuyProductContainer>
        <Price>
          R$ <span>{price.toFixed(2)}</span>
        </Price>

        <QuantityAndShopContainer>
          <QuantityContainer>
            <button onClick={decrementQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={incrementQuantity}>+</button>
          </QuantityContainer>

          <ShoppingCartContainer>
            <ShoppingCart size={20} color="white" />
          </ShoppingCartContainer>
        </QuantityAndShopContainer>
      </BuyProductContainer>
    </CoffeeContainer>
  );
};
