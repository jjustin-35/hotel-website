import { configureStore } from "@reduxjs/toolkit";

import user from "@/redux/user";
import orders from "@/redux/orders";
import rooms from "@/redux/rooms";

const store = configureStore({
  reducer: {
    user,
    orders,
    rooms,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
