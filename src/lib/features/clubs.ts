import { createSelector, createSlice } from "@reduxjs/toolkit";
import clubs from "../mocks/clubs";
import type { RootState } from "../store";

export const selectClubs = createSelector(
  (state: RootState) => state.clubs.data,
  (state: RootState) => state.clubs.isShowMore,
  (data, isShowMore) => (isShowMore ? data : data.slice(0, 3))
);

export const selectIsShowMore = (state: RootState) => state.clubs.isShowMore;

const clubsSlice = createSlice({
  name: "clubs",
  initialState: {
    data: clubs.data,
    isShowMore: false,
  },
  reducers: {
    setItems: (state, action) => {
      state.data = action.payload;
    },
    toggleIsShowMore: (state) => {
      state.isShowMore = !state.isShowMore;
    },
  },
});

export default clubsSlice.reducer;

export const { setItems, toggleIsShowMore } = clubsSlice.actions;
