import { configureStore } from "@reduxjs/toolkit";

import orders from "@/redux/orders";

const store = configureStore({
  reducer: {
    orders,
  },
});

export default store;
