import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer';
import Home from './paginas/home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>Oi...</h1>
      <h2>Tudo bem?</h2>
      <Home/>
      <Footer />
    </>
  )
}

export default App
