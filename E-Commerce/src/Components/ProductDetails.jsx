import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const ProductDetails = () => {

    const { id } = useParams()

    let [details, setDetails] = useState({});
    let [realted, setRelated] = useState([])
    const getProductDetail = () => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then((res) => {
                setDetails(res.data)
            })
    }
    const getRelated = () => {
        axios.get("http://localhost:3000/product")
            .then((res) => {
                setRelated(res.data);
            })
    }

    useEffect(() => {
        getRelated();
        getProductDetail();
    }, [details,realted]);


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
                        <button className="bg-amber-500 text-white px-5 py-2 rounded-md">Add To Cart</button>
                        <button className="bg-orange-500 text-white px-5 py-2 rounded-md ms-4">Buy Now</button>
                    </div>
                </div>
                <h3 className="text-center text-4xl font-medium my-5">Related Peoducts</h3>
                <div className="flex">
                    {realted.filter((v) => {
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
                                                <button className="bg-amber-500 text-white px-5 py-2 rounded-md">Add To Cart</button>
                                                <button className="bg-orange-500 text-white px-5 py-2 rounded-md ms-4">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}


export default ProductDetails;