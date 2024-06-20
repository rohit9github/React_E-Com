
const Navbar = () => {
    return (
        <>
            <header className="bg-violet-600">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-medium text-white">E-cart</h2>
                        <div>
                            <input type="text" placeholder="Search Your Item" className="pe-28 ps-4 text-start inline-block" />
                        </div>
                        <div className="text-white text-2xl font-medium">CART</div>
                    </div>
                    <nav>
                        <ul className="flex justify-between items-center">
                            <li>
                                <a href="" className="text-white text-2xl">Mobiles</a>
                            </li>
                            <li>
                                <a href="" className="text-white text-2xl">Laptops</a>
                            </li>
                            <li>
                                <a href="" className="text-white text-2xl">Tablates</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar;