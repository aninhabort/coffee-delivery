import { CoffeeListComponent, CoffeeListContainer, Title } from "../styles/coffeeList.styles"
import { Coffee } from "./coffee"
import data from '../data';

export const CoffeeList = () => {
  return (
    <CoffeeListComponent>
      <Title>Nossos cafés</Title>

      <CoffeeListContainer>
        {data.map(item => {
          return (
            <Coffee title={item.title} description={item.description} img={item.img} price={item.price} tags={item.tags} />
          )
        })}
      </CoffeeListContainer>
    </CoffeeListComponent>
  )
}