import { Home } from "./components/Home"
import { Header } from "./components/Header"
import Global from "./styles/Global"
import { About } from "./components/About"
import { Skil } from "./components/Skils"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
       <Global />
      <Header />
      <Home />
      <About />
      <Skil />
      <Projects/>
      <Footer />
    </>
  )
}

export default App
