import { createSlice } from "@reduxjs/toolkit";

export const SPOTLIGHT_SLICE_NAME = "spotlight";

const spotlightSlice = createSlice({
  name: SPOTLIGHT_SLICE_NAME,
  initialState: {
    query: "",
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = spotlightSlice.actions;
export default spotlightSlice.reducer;
