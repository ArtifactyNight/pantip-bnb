import { configureStore } from "@reduxjs/toolkit";
import spotlightSlice from "@/lib/features/spotlight";

export const makeStore = () => {
  return configureStore({
    reducer: {
      spotlight: spotlightSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
