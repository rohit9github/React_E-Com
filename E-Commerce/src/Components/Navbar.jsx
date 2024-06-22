import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ filteredByCategory, cart }) => {

    let [search, setSearch] = useState('');

    let navigate = useNavigate()

    let location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`);
    }

    return (
        <>
            <header className="bg-violet-600 py-5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-medium text-white">
                            <Link to={"/"}>E-Cart</Link>
                        </h2>
                        <div>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <input type="text" value={search} placeholder="Search Your Item" className="pe-28 ps-4 text-start inline-block" onChange={(e) => setSearch(e.target.value)} />
                            </form>
                        </div>
                        <div className="text-white text-2xl font-medium">
                            <Link to={"/cart"}>
                                <button className="bg-blue-600 relative px-5 py-1 rounded-md">
                                    Cart
                                    <span className="absolute bottom-9 left-14 rounded-full px-2 py-1 text-sm translate-x-1/2 translate-y-1/2 bg-red-500">
                                        {cart.length}
                                        <span></span>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    {location.pathname == "/" && (
                        <nav>
                        <ul className="flex justify-between items-center">
                            <li>
                                <button type="button" className="text-white text-2xl" onClick={() => filteredByCategory("Mens")} >Men</button>
                            </li>
                            <li>
                                <button type="button" className="text-white text-2xl" onClick={() => filteredByCategory("Womens")}>Women</button>
                            </li>
                            <li>
                                <button type="button" className="text-white text-2xl" onClick={() => filteredByCategory("Electronics")}>Electronics</button>
                            </li>
                            <li>
                                <button type="button" className="text-white text-2xl" onClick={() => filteredByCategory("Kids")} >Kids</button>
                            </li>
                            <li>
                                <button type="button" className="text-white text-2xl" onClick={() => filteredByCategory('All')}>All</button>
                            </li>
                        </ul>
                    </nav>
                    )}
                    
                </div>
            </header>
        </>
    )
}

export default Navbar;      