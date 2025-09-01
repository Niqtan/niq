import { useState } from 'react'

import './App.css'
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
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
