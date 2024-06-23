import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Products from "./Products";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = ({ cart, setCart }) => {

    const { id } = useParams()

    let [details, setDetails] = useState({});
    let [product, setProduct] = useState([]);
    // let [related, setRelated] = useState([])

    const getProductDetail = () => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then((res) => {
                setDetails(res.data)
            })
    }
    const getRelated = () => {
        axios.get("http://localhost:3000/product")
            .then((res) => {
                setProduct(res.data);
            })
    }

    const addToCart = (id, path, price, category_name, brand, title) => {
        const obj = {
            id, path, price, category_name, brand, title
        }
        setCart([...cart, obj])
        console.log(cart);
        toast.success("Added To Cart", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }
    

    useEffect(() => {
        getRelated();
        getProductDetail();
        // let realtedProducts = product.filter((v, i) => v.subcategory === details.subcategory);
        // setRelated(realtedProducts);
    }, [details,product]);


    return (
        <>
            <div className="max-w-7xl mx-auto px-4 mt-5">
                <div className="flex items-center justify-center gap-16">
                    <div className="img">
                        <img src={details.path} alt="" className="w-80" />
                    </div>
                    <div>
                        <h2>Title :- {details.title}</h2>
                        <h3>Brand :- {details.brand}</h3>
                        <h3>Category :- {details.category_name}</h3>
                        <span>Price :- {details.price}</span><br /><br />
                        <button className="bg-amber-500 text-white px-5 py-2 rounded-md" onClick={() => addToCart(details.id, details.path, details.price, details.category_name, details.brand, details.title)}>Add To Cart</button>
                        <button className="bg-orange-500 text-white px-5 py-2 rounded-md ms-4">Buy Now</button>
                    </div>
                </div>
                <h3 className="text-center text-4xl font-medium my-5">Related Peoducts</h3>
                <div className="flex">
                    {product.filter((v) => {
                        if (v.subcategory === details.subcategory) {
                            return v;
                        }
                    })
                        .map((v1, i1) => {
                            return (
                                <>
                                    <div className="w-1/4" key={i1}>
                                        <div className="products-items my-4 ">
                                            <Link to={`/details/${v1.id}`}>
                                                <img src={v1.path} alt="" className="inline-block object-cover" />
                                            </Link>
                                            <div>
                                                <h2>Title :- {v1.title}</h2>
                                                <h3>Brand :- {v1.brand}</h3>
                                                <h3>Category :- {v1.category_name}</h3>
                                                <span>Price :- {v1.price}</span><br /><br />
                                                <button className="bg-amber-500 text-white px-5 py-2 rounded-md" onClick={() => addToCart(v1.id, v1.path, v1.price, v1.category_name, v1.brand, v1.title)}>Add To Cart</button>
                                                <button className="bg-orange-500 text-white px-5 py-2 rounded-md ms-4">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                    {/* <Products cart={cart} setCart={setCart} product={related} /> */}
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}


export default ProductDetails;