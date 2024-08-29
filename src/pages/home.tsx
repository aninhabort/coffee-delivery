import { CoffeeList } from "../components/coffeeList"
import { IntroOfThePage } from "../components/intro"

export const Home = () => {
  return (
    <div>
      <IntroOfThePage />
      <CoffeeList />
    </div>
  )
}