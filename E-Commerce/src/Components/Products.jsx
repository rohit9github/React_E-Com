
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = ({ product, cart, setCart }) => {
    const addToCart = (id, path, price, category_name, brand, title,decs,rating) => {
        const obj = {
            id, path, price, category_name, brand, title,decs,rating
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

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap">
                    {product.map((v, i) => {
                        return (
                            <>
                                <div className="w-1/3" key={i}>
                                    <div className="products-items my-4 mx-3 p-2">
                                        <div className="products-img text-center">
                                            <Link to={`/details/${v.id}`}>
                                                <img src={v.path} alt="" className="inline-block object-cover" />
                                            </Link>
                                        </div>
                                        <div className="p-2">
                                            <h2 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium text-neutral-700">{v.title}</h2>
                                            <h3 className="text-lg font-medium">{v.brand}</h3>
                                            <h3 className="text-lg font-medium">{v.category_name}</h3>
                                            <span className="text-lg font-medium text-slate-700">{v.price}</span>
                                            <span className="text-base font-normal line-through ms-2 text-slate-500">{v.oprice}</span>
                                            <div className="text-center mt-6 mb-2">
                                                <button className="bg-amber-500 text-white px-5 py-2 rounded-md" onClick={() => addToCart(v.id, v.path, v.price, v.category_name, v.brand, v.title, v.decs,v.rating)} >Add To Cart</button>
                                                <button type="button" className="bg-orange-500 text-white px-5 py-2 rounded-md ms-4"  >Buy Now</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Products;