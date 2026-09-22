import { Link } from "react-router";
import ThemeController from "../Theme/ThemeController";

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
            <li>
                <Link to="/new-arrivals">New Arrivals</Link>
            </li>
            <li>
                <Link to="/collections">Collections</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </>
    );
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8 border">

            {/* Left - Logo + Mobile Menu */}
            <div className="navbar-start">

                {/* Mobile Menu */}
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="mx-1 lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-3 shadow-lg"
                    >
                        {links}
                    </ul>
                </div>

                {/* Logo */}
                <Link
                    to="/"
                    className=""
                >
                    <img className="w-16" src="../../../public/FoxArt.png" alt="" />
                </Link>
            </div>


            {/* Center - Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1 font-medium">
                    {links}
                </ul>
            </div>


            {/* Right Side */}
            <div className="navbar-end gap-1">
                <ThemeController />
                {/* Search */}
                <button className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                        />
                    </svg>
                </button>


                {/* Wishlist */}
                <Link
                    to="/wishlist"
                    className="btn btn-ghost btn-circle hidden sm:flex"
                >
                    <div className="indicator">
                        <span className="text-xl">♡</span>
                    </div>
                </Link>


                {/* Cart */}
                <Link
                    to="/cart"
                    className="btn btn-ghost btn-circle"
                >
                    <div className="indicator">
                        <span className="text-xl">🛒</span>

                        {/* Cart Count */}
                        <span className="badge badge-xs badge-primary indicator-item">
                            0
                        </span>
                    </div>
                </Link>


                {/* Account */}
                <Link
                    to="/login"
                    className="btn btn-primary ml-1"
                >
                    Login
                </Link>

            </div>
        </div>
    );
};

export default Navbar;
