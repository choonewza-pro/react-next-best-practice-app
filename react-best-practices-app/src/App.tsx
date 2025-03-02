import { Route, Routes } from 'react-router'

import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <hr />
        <Routes>
          <Route path="/" index element={ <HomePage /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/product" element={ <ProductPage /> } />
        </Routes>
      </div>
      
    </>
  )
}

export default App
