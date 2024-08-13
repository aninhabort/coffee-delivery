import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import Router from "./router"
import { defaultTheme } from "./styles/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
