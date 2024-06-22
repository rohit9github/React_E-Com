import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'
import SearchItem from './Components/SearchItem'
import Cart from './Components/Cart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/details/:id' element={<ProductDetails />} />
          <Route path='/search/:term' element={<SearchItem />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
