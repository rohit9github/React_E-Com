


const Cart = ({ cart, setCart }) => {


    const renderStars = ()=>{
        
    }

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="">
                    {cart.map((v, i) => {
                        return (
                            <>
                                <div className="flex items-center justify-center">
                                    <div className="w-1/3">
                                        <img src={v.path} alt="" />
                                    </div>
                                    <div className="w-2/3">
                                        <h2 className="text-2xl font-semibold">Title :- {v.title}</h2>
                                        <h3 className="text-xl font-medium my-2">Brand :- {v.brand}</h3>
                                        <h3 className="text-xl font-medium">Category :- {v.category_name}</h3>
                                        <p className="max-w-xl text-black my-2 text-lg">Description :- {v.decs}</p>
                                        <span className="text-xl font-semibold text-slate-700">Price :- {v.price}</span>
                                        <span className="text-base font-normal line-through ms-2 text-slate-500">{v.oprice}</span> <br />
                                        <span className="text-xl font-medium text-slate-700 flex items-center">Rating :- {renderStars(v.rating)}</span>
                                        <br /><br />

                                        <button className="bg-orange-500 text-white px-5 py-2 rounded-md ms-4">Buy Now</button>
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