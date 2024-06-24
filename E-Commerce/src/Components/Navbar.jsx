import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaUserEdit } from "react-icons/fa";


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
                        <div className="">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <input type="text" value={search} placeholder="Search Your Item" className="w-[40rem] ps-4 py-1 rounded text-lg text-black text-start inline-block outline-none border-none " onChange={(e) => setSearch(e.target.value)} />
                            </form>
                        </div>
                        <div>
                            <ul className="flex">
                                <li className="mx-5">
                                    <Link to={'/login'} className="text-2xl font-medium text-white flex items-center inline-block"><FaRegCircleUser className="me-1" />Login</Link>
                                </li>
                                <li className="mx-5">
                                    <Link to={"/register"} className="text-2xl font-medium text-white flex items-center"><FaUserEdit className="me-1 font-semibold" />Register</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-white text-2xl font-medium">
                            <Link to={"/cart"}>
                                <button className="bg-blue-600 relative px-5 py-1 rounded-md flex items-center">
                                <PiShoppingCartBold className="me-1" />Cart
                                    <span className="absolute bottom-10 left-20 rounded-full px-2 py-1 text-sm translate-x-1/2 translate-y-1/2 bg-red-500">
                                        {cart.length}
                                        <span></span>
                                    </span>
                                </button>
                            </Link>
                        </div>

                    </div>
                    {location.pathname == "/" && (
                        <nav className="mt-4">
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