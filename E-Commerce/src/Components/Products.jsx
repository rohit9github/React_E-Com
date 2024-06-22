
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = ({ product, cart, setCart }) => {

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

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap">
                    {product.map((v, i) => {
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
                                            <button className="bg-amber-500 text-white px-5 py-2 rounded-md" onClick={() => addToCart(v.id, v.path, v.price, v.category_name, v.brand, v.title)} >Add To Cart</button>
                                            <button type="button" className="bg-orange-500 text-white px-5 py-2 rounded-md ms-4"  >Buy Now</button>
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