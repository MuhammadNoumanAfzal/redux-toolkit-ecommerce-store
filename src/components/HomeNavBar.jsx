import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartProducts = useSelector((state) => state.cart);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-trasnparent ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">MyShop</h1>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-8 lg:text-[20px] ${
            isMenuOpen
              ? "absolute top-16 left-0 w-full bg-gray-800 flex flex-col space-y-4 py-4"
              : "hidden"
          }`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
            { name: "Contact", path: "/contact" },
            { name: "Login", path: "/login" },
          ].map(({ name, path }) => (
            <li key={name} className="text-center">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative transition-all duration-300 ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-white hover:text-blue-900"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
                {/* Underline effect */}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-transform origin-right duration-300 hover:scale-x-100"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Cart Icon with Item Count */}
        <div className="relative">
          <NavLink to="/cart">
            <FaShoppingCart className="text-2xl text-white cursor-pointer hover:text-blue-500 transition" />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartProducts.length}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
