import { configureStore } from "@reduxjs/toolkit";

import user from "@/redux/user";
import orders from "@/redux/orders";

const store = configureStore({
  reducer: {
    user,
    orders,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
