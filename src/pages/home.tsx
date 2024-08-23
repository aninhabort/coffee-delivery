import { CoffeeList } from "../components/coffeeList"
import { Header } from "../components/header"
import { IntroOfThePage } from "../components/intro"

export const Home = () => {
  return (
    <div>
      <Header />
      <IntroOfThePage />
      <CoffeeList />
    </div>
  )
}