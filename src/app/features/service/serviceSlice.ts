import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ServiceState {
  mainService: string;
  subService: string;
  availability: string;
}

const initialState: ServiceState = {
  mainService: "",
  subService: "",
  availability: "",
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setMainService: (state, action: PayloadAction<string>) => {
      state.mainService = action.payload;
    },
    setSubService: (state, action: PayloadAction<string>) => {
      state.subService = action.payload;
    },
    setAvailability: (state, action: PayloadAction<string>) => {
      state.availability = action.payload;
    },
    resetService: () => initialState,
  },
});

export const { setMainService, setSubService, setAvailability, resetService } =
  serviceSlice.actions;

export default serviceSlice.reducer;
