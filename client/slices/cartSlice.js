import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
        // state.items = state.items.filter((item) => item.id !== action.payload);
        let newCart = [...state.items];
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index >= 0) {
          newCart.splice(index, 1);
        } else {
          console.warn(`Cart Already Empty`);
        }
        state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

// Memoized selector for cart item by ID
export const selectCartItemById = createSelector(
  [selectCartItems, (state, id) => id],
  (items, id) => items.filter((item) => item.id === id)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.price, 0)
);

export default cartSlice.reducer;
