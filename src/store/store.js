import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    // locationState: locationReducer
  },
});

// export default store;
