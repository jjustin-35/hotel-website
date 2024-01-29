import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { RoomType } from "@/constants/types/room";
import fetchApi from "@/helpers/apiHelper";
import { apiMethod } from "@/constants/types/api";
import apiPaths from "@/constants/apis";
import config from "@/config";

export const getRooms = createAsyncThunk<RoomType[], void>(
  "rooms/getRooms",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchApi(
        `${config.API_URL}${apiPaths.rooms}`,
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

export const getRoomDetail = createAsyncThunk<RoomType, string>(
  "rooms/getRoomDetail",
  async (id: string, { rejectWithValue }) => {
    try {
      const data = await fetchApi(
        `${config.API_URL}${apiPaths.rooms}/${id}`,
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

type InitialState = {
  rooms: RoomType[];
  roomDetail: RoomType | null;
  errorMessage?: string;
};

const initialState: InitialState = {
  rooms: [],
  roomDetail: null,
  errorMessage: "",
};

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.rooms = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(getRooms.rejected, (state, action) => {
      state.errorMessage = action.payload as string;
    });
    builder.addCase(getRoomDetail.fulfilled, (state, action) => {
      state.roomDetail = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(getRoomDetail.rejected, (state, action) => {
      state.errorMessage = action.payload as string;
    });
  },
});

export default roomSlice.reducer;