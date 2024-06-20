import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from './Components/Products'

function App() {

  return (
    <>
    <BrowserRouter>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
