import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="py-6 text-center text-3xl font-bold">
        Shop Our Products
      </header>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <BiLoaderCircle className="text-5xl animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white text-gray-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 cursor-pointer flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <div className="flex justify-between mt-auto">
                <button
                  className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition w-full flex items-center justify-center gap-2"
                  onClick={() => addToCart(product)}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <button className="text-gray-900 hover:text-red-500 transition ml-2">
                  <AiOutlineHeart className="text-2xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <footer className="py-6 text-center text-gray-400">
        &copy; 2025 E-Commerce Shop. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Products;
