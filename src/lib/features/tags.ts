import { createSelector, createSlice } from "@reduxjs/toolkit";
import tags from "../mocks/tags";
import type { RootState } from "../store";

export const selectTags = createSelector(
  (state: RootState) => state.tags.data,
  (state: RootState) => state.tags.isShowMore,
  (data, isShowMore) => (isShowMore ? data : data.slice(0, 3))
);

export const selectIsShowMore = (state: RootState) => state.tags.isShowMore;

const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    data: tags.data,
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

export default tagsSlice.reducer;

export const { setItems, toggleIsShowMore } = tagsSlice.actions;
