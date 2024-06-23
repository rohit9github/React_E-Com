import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import Products from "./Products";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


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
    }, [details, product]);


    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else if (i < rating) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-500" />);
            }
        }
        return stars;
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 mt-5">
                <div className="flex items-center justify-center gap-16">
                    <div className="img">
                        <img src={details.path} alt="" className="w-80" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">Title :- {details.title}</h2>
                        <h3 className="text-xl font-medium my-2">Brand :- {details.brand}</h3>
                        <h3 className="text-xl font-medium">Category :- {details.category_name}</h3>
                        <p className="max-w-xl text-black my-2 text-lg">Description :- {details.decs}</p>
                        <span className="text-xl font-semibold text-slate-700">Price :- {details.price}</span>
                        <span className="text-base font-normal line-through ms-2 text-slate-500">{details.oprice}</span> <br />
                        <span className="text-xl font-medium text-slate-700 flex items-center">Rating :- {renderStars(details.rating)}</span>
                        <br /><br />
                        <button className="bg-amber-500 text-white px-5 py-2 rounded-md" onClick={() => addToCart(details.id, details.path, details.price,details.decs, details.category_name, details.brand, details.title)}>Add To Cart</button>
                        <button className="bg-orange-500 text-white px-5 py-2 rounded-md ms-4">Buy Now</button>
                    </div>
                </div>
                <h3 className="text-center text-4xl font-medium my-5">Related Products</h3>
                <div className="flex flex-wrap">
                    {product.filter((v) => {
                        if (v.subcategory === details.subcategory) {
                            return v;
                        }
                    })
                        .map((v1, i1) => {
                            return (
                                <>
                                    <div className="w-1/3" key={i1}>
                                        <div className="products-items my-4 mx-3 p-2">  
                                            <div className="products-img text-center">
                                            <Link to={`/details/${v1.id}`}>
                                                <img src={v1.path} alt="" className="inline-block object-cover" />
                                            </Link>
                                            </div>
                                            <div className="p-2">
                                                <h2 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium text-neutral-700">{v1.title}</h2>
                                                <h3 className="text-lg font-medium">{v1.brand}</h3>
                                                <h3 className="text-lg font-medium">{v1.category_name}</h3>
                                                <span className="text-lg font-medium text-slate-700">{v1.price}</span>
                                                <span className="text-base font-normal line-through ms-2 text-slate-500">{v1.oprice}</span><br /><br />
                                                <div className="text-center mt-6 mb-2">
                                                    <button className="bg-amber-500 text-white px-5 py-2 rounded-md" onClick={() => addToCart(v1.id, v1.path, v1.price, v1.category_name, v1.brand, v1.title,v1.decs,)}>Add To Cart</button>
                                                    <button className="bg-orange-500 text-white px-5 py-2 rounded-md ms-4">Buy Now</button>
                                                </div>
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
            <ToastContainer />
        </>
    )
}


export default ProductDetails;