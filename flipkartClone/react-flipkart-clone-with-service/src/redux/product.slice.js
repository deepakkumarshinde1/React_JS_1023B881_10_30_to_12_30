import { createSlice } from "@reduxjs/toolkit";

let ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    productList: [],
    categories: [],
    cart: [],
  },
  reducers: {
    saveProduct: (state, action) => {
      state.productList = action.payload;
    },
    saveCategories: (state, action) => {
      state.categories = action.payload;
    },
    saveToCart: (state, action) => {
      let index = state.cart.findIndex((cart) => cart.id === action.payload.id);
      if (index !== -1) {
        // qty update
        state.cart[index].qty += 1;
      } else {
        // add a new record to cart
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
    manageQty: (state, action) => {
      let { index, sign } = action.payload;
      if (sign === "+") {
        state.cart[index].qty += 1;
      } else {
        if (state.cart[index].qty === 1) {
          state.cart.splice(action.payload, 1);
        } else {
          state.cart[index].qty -= 1;
        }
      }
    },
  },
});

export default ProductSlice.reducer;
export const {
  saveProduct,
  saveCategories,
  saveToCart,
  removeFromCart,
  manageQty,
} = ProductSlice.actions;
