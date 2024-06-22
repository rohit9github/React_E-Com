import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";



const SearchItem = ({cart,setCart}) => {

    let [product, setProduct] = useState([])

    const { term } = useParams();

    const getProdcut = () => {
        axios.get("http://localhost:3000/product")
            .then((res) => {
                setProduct(res.data)
            })
    }

    const filterData = product.filter((v)=>v.title.toLowerCase().includes(term.toLowerCase()));

    useEffect(() => {
        getProdcut()
    }, []);

    return (
        <>
            <Products cart={cart} setCart={setCart} product={filterData} />
        </>
    )
}

export default SearchItem;