import { configureStore } from "@reduxjs/toolkit";

import serviceReducer from "./features/service/serviceSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    service: serviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
