import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'
import SearchItem from './Components/SearchItem'
import Cart from './Components/Cart'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  let [product, setProduct] = useState([]);
  let [filtered, setFiltered] = useState([]);
  let [cart,setCart] =  useState([])


  let getProducts = () => {
    axios.get("http://localhost:3000/product")
      .then((res) => {
        setProduct(res.data);
        setFiltered(res.data);
      });
    }

    useEffect(() => {
      getProducts()
    }, []);

  let filteredByCategory = (category) => {
    if (category === "All") {
      setFiltered(product)
    }
    else {
      let filteredProducts = product.filter((p) => p.category_name === category)
      setFiltered(filteredProducts);
      console.log(filteredProducts);
    }
  }


  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} filteredByCategory={filteredByCategory} />
        <Routes>
          <Route path='/' element={<Products cart={cart} setCart={setCart} product={filtered} />} />
          <Route path='/details/:id' element={<ProductDetails />} />
          <Route path='/search/:term' element={<SearchItem />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
