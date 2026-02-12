import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { add, remove } from "../store/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-8">Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col justify-between"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain mb-4 bg-white p-2 rounded"
                />
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-2">Price: ${item.price}</p>
                <p className="text-green-400 font-semibold">
                  Total: ${item.totalPrice.toFixed(2)}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <button
                    className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2 transition"
                    onClick={() => dispatch(remove(item.id))}
                  >
                    {item.quantity > 1 ? <FaMinus /> : <FaTrash />}
                  </button>

                  <span className="text-lg font-bold">{item.quantity}</span>

                  <button
                    className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 transition"
                    onClick={() => dispatch(add(item))}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Display Total Price */}
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold">
              Total Cart Price: ${totalCartPrice.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
