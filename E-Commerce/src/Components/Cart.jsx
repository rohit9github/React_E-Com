


const Cart = ({ cart, setCart }) => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center">
                    {cart.map((v, i) => {
                        return (
                            <>
                                <div className="flex items-center justify-center">
                                    <div className="w-1/3">
                                        <img src={v.path} alt="" />
                                    </div>
                                    <div className="w-2/3">
                                        <h2>Title :- {v.title}</h2>
                                        <h3>Brand :- {v.brand}</h3>
                                        <h3>Category :- {v.category_name}</h3>
                                        <span>Price :- {v.price}</span><br /><br />
                                        <button type="button" className="bg-orange-500 text-white px-5 py-2 rounded-md ms-4"  >Buy Now</button>
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