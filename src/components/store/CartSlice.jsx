import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price; // Increase total price
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price, // Initialize total price
        });
      }
    },
    remove(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
          state[index].totalPrice -= state[index].price; // Decrease total price
        } else {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
