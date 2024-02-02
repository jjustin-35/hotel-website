import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import config from "@/config";
import apiPaths from "@/constants/apis";
import fetchApi from "@/helpers/apiHelper";
import { apiMethod } from "@/constants/types/api";
import { UpdateUserType, UserType } from "@/constants/types/user";

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
      undefined,
      headers
    );

    if (!resp.status) {
      rejectWithValue(resp.message);
      return;
    }

    return resp.result;
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data: UpdateUserType, { rejectWithValue }) => {
    const token = Cookies.get("access_token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const resp = await fetchApi(
      `${config.API_URL}${apiPaths.user}`,
      apiMethod.PUT,
      data,
      headers
    );

    if (!resp.status) {
      rejectWithValue(resp.message);
      return;
    }

    return resp.result;
  }
);

type InitialState = {
  user: UserType | null;
  errorMessage?: string;
};

const initialState: InitialState = {
  user: null,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.errorMessage = action.payload as string;
    });

    builder.addCase(updateUser.rejected, (state, action) => {
      state.errorMessage = action.payload as string;
    });
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
