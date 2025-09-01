import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Opening from "./components/Opening.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import CardsContent from "./components/CardsContent.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <html lang="en" className="!scroll-smooth">
      <div className="min-h-screen flex flex-col">
        <Hero />
        <main className="grow">
          <About />
        </main>
        <Footer />    
      </div>
    </html>
    </>
  )
}

export default App
