import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Card from "./components/Card.jsx"
import CardsContent from "./components/CardsContent.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <About />
      <Card />
      <CardsContent />
      <Footer />    
    </>
  )
}

export default App
