import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import config from "@/config";
import apiPaths from "@/constants/apis";
import fetchApi from "@/helpers/apiHelper";
import { apiMethod } from "@/constants/types/api";

export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    const token = Cookies.get("access_token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const resp = await fetchApi(
      `${config.API_URL}${apiPaths.user}`,
      apiMethod.GET,
      headers
    );

    if (!resp.status) {
      rejectWithValue(resp.message);
      return;
    }

    return resp.result;
  }
);

type UserType = {
  address: {
    zipcode: number;
    detail: string;
    city: string;
    county: string;
  };
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

type InitialState = {
  user?: UserType;
  errorMessage?: string;
};

const initialState: InitialState = {
  user: null,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.errorMessage = action.payload as string;
    });
  }
});

export default userSlice.reducer;
