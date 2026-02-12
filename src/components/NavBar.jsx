import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartProducts = useSelector((state) => state.cart);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">MyShop</h1>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
            { name: "Contact", path: "/contact" },
            { name: "Login", path: "/login" },
          ].map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative transition-all duration-300 ${
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "text-white hover:text-blue-400"
                  }`
                }
              >
                {name}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 transition-transform origin-right duration-300 hover:scale-x-100"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Cart Icon */}
        <div className="relative">
          <NavLink to="/cart">
            <FaShoppingCart className="text-2xl text-gray-300 cursor-pointer hover:text-blue-400 transition" />
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartProducts.length}
            </span>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <ul className="flex flex-col space-y-4 text-center">
            {[
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              { name: "Contact", path: "/contact" },
              { name: "Login", path: "/login" },
            ].map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `block py-2 transition-all duration-300 ${
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-gray-300 hover:text-blue-400"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
