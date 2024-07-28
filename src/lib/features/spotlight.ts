import { createSlice } from "@reduxjs/toolkit";

const spotlightSlice = createSlice({
  name: "spotlight",
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
