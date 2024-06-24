import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


const Cart = ({ cart, setCart }) => {


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
    }

    const removeCart = (id)=>{
        setCart(cart.filter((v)=>{
            return v.id!== id;
        }))
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-5">
                <div className="">
                    {cart.map((v, i) => {
                        return (
                            <>
                                <div className="cart-items flex items-center justify-center my-5 p-5">
                                    <div className="w-1/3">
                                        <img src={v.path} alt="" />
                                    </div>
                                    <div className="w-2/3">
                                        <div className="ml-10">
                                            <h2 className="text-2xl font-semibold">Title :- {v.title}</h2>
                                            <h3 className="text-xl font-medium my-2">Brand :- {v.brand}</h3>
                                            <h3 className="text-xl font-medium">Category :- {v.category_name}</h3>
                                            <p className="max-w-xl text-black my-2 text-lg">Description :- {v.decs}</p>
                                            <span className="text-xl font-semibold text-slate-700">Price :- {v.price}</span>
                                            <span className="text-base font-normal line-through ms-2 text-slate-500">{v.oprice}</span> <br />
                                            <span className="text-xl font-medium text-slate-700 flex items-center mt-2">Rating :- {renderStars(v.rating)}</span>
                                            <button className="bg-orange-500 text-white px-5 py-2 rounded-md mt-6 font-medium text-lg">Buy Now</button>
                                            <button className="bg-red-500 text-white px-5 py-2 rounded-md font-medium text-lg ms-4" type="button" onClick={()=>removeCart(v.id)}>Remove Cart</button>
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


export default Cart;