import { createSlice } from "@reduxjs/toolkit";
import highlights from "../mocks/highlights";

export const highlightSlice = createSlice({
  name: "highlights",
  initialState: {
    data: highlights.data,
  },
  reducers: {},
});

export default highlightSlice.reducer;
