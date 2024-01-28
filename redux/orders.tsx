import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { OrderType, ReserveOrderType } from "@/constants/types/order";
import fetchApi from "@/helpers/apiHelper";
import { apiMethod } from "@/constants/types/api";
import config from "@/config";
import apiPaths from "@/constants/apis";

type UserInfoType = {
  address: {
    zipCode: number;
    detail: string;
  };
  name: string;
  phone: string;
  email: string;
};

type SetOrdersDataType = {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  peopleNum: number;
  userInfo: UserInfoType;
};

type InitialState = {
  orders: OrderType[];
  orderDetail: OrderType;
  reserveOrder: ReserveOrderType;
  errorMessage: string;
};

export const getOrders = createAsyncThunk(
  "orders/getOrders",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchApi(
        `${config.API_URL}${apiPaths.orders}`,
        apiMethod.GET
      );

      if (data.status === true) {
        return data.result;
      }

      return rejectWithValue(data.message);
    } catch (err) {
      console.log(err);
    }
  }
);

export const setOrders = createAsyncThunk(
  "orders/setOrders",
  async (data: SetOrdersDataType, { rejectWithValue }) => {
    try {
      const resp = await fetchApi(
        `${config.API_URL}${apiPaths.orders}`,
        apiMethod.POST,
        data
      );

      if (resp.status === true) {
        return resp.result;
      }

      return rejectWithValue(resp.message);
    } catch (err) {
      console.log(err);
    }
  }
);

export const getOrderDetail = createAsyncThunk(
  "orders/getOrderDetail",
  async (id: string, { rejectWithValue }) => {
    try {
      const data = await fetchApi(
        `${config.API_URL}${apiPaths.orders}/${id}`,
        apiMethod.GET
      );

      if (data.status === true) {
        return data.result;
      }

      return rejectWithValue(data.message);
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (id: string, { rejectWithValue }) => {
    try {
      const data = await fetchApi(
        `${config.API_URL}${apiPaths.orders}/${id}`,
        apiMethod.DELETE
      );

      if (data.status === true) {
        return data.result;
      }

      return rejectWithValue(data.message);
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState: InitialState = {
  orders: [],
  orderDetail: null,
  reserveOrder: null,
  errorMessage: "",
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setReserveOrder: (state, action) => {
      state.reserveOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.errorMessage = action.payload as string;
    });

    builder.addCase(setOrders.fulfilled, (state, action) => {
      state.orderDetail = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(setOrders.rejected, (state, action) => {
      state.errorMessage = action.payload as string;
    });

    builder.addCase(getOrderDetail.fulfilled, (state, action) => {
      state.orderDetail = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(getOrderDetail.rejected, (state, action) => {
      state.errorMessage = action.payload as string;
    });

    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.orderDetail = action.payload;
      state.orders = state.orders.filter(
        (order) => order._id !== action.payload._id
      );
      state.errorMessage = "";
    });
    builder.addCase(deleteOrder.rejected, (state, action) => {
      state.errorMessage = action.payload as string;
    });
  },
});

export default ordersSlice.reducer;

export const orderActions = ordersSlice.actions;