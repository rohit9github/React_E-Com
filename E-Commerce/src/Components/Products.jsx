import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Products = () => {

    let [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = () => {
            axios.get("http://localhost:3000/product")
                .then((res) => {
                    setProducts(res.data)
                })
        }
        getProducts()
    }, [])
    console.log(products);

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap">
                    {products.map((v,i) => {
                        return (
                            <>
                                <div className="w-1/4" key={i}>
                                    <div className="products-items my-4 "> 
                                        <Link to={`/details/${v.id}`}>
                                            <img src={v.path} alt="" className="inline-block object-cover" />
                                        </Link>
                                        <div>
                                            <h2>Title :- {v.title}</h2>
                                            <h3>Brand :- {v.brand}</h3>
                                            <h3>Category :- {v.category_name}</h3>
                                            <span>Price :- {v.price}</span><br /><br />
                                            <button className="bg-amber-500 text-white px-5 py-2 rounded-md">Add To Cart</button>
                                            <button className="bg-orange-500 text-white px-5 py-2 rounded-md ms-4">Buy Now</button>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Products;