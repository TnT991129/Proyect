import './App.css'
import BentoGrids from './components/bentoGrids'
import Footer from './components/footer'
import Hero from './components/hero'
import LogoClouds from './components/logoClouds'
import NavBar from './components/navbar'
import Prices from './components/pricesPage'
import BarraDeProgresoScroll from './scrollEffect/scroll'

function App() {

  return (
    <>

      <NavBar/>
      <Hero/>
      <LogoClouds/>
      <BentoGrids/>
      <Prices/>
      <Footer/>
      <BarraDeProgresoScroll/>
    </>
  )
}

export default App
