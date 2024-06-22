import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ filteredByCategory }) => {

    let [search,setSearch] =  useState('');

    let navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`/search/${search}`);
    }

    return (
        <>
            <header className="bg-violet-600">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-medium text-white">
                            <Link to={"/"}>E-Cart</Link>
                        </h2>
                        <div>
                            <form onSubmit={(e)=>handleSubmit(e)}>
                                <input type="text" value={search} placeholder="Search Your Item" className="pe-28 ps-4 text-start inline-block" onChange={(e)=>setSearch(e.target.value)} />
                            </form>
                        </div>
                        <div className="text-white text-2xl font-medium">
                            <Link to={"/cart"}>Cart</Link>
                        </div>
                    </div>
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
                </div>
            </header>
        </>
    )
}

export default Navbar;      