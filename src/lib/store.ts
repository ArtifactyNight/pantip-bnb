import spotlight from "@/lib/features/spotlight";
import { configureStore } from "@reduxjs/toolkit";
import clubs from "./features/clubs";
import highlights from "./features/highlights";
import rooms from "./features/rooms";
import tags from "./features/tags";

export const makeStore = () => {
  return configureStore({
    reducer: {
      spotlight,
      rooms,
      highlights,
      tags,
      clubs,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
