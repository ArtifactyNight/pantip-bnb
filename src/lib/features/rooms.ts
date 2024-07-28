import { createSlice } from "@reduxjs/toolkit";
import rooms from "../mocks/rooms";

const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    data: rooms.data,
  },
  reducers: {},
});

export default roomSlice.reducer;
