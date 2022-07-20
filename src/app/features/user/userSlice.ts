import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  name: string;
  tel: string | null;
  city: string;
  address: string;
}

interface PayloadData {
  name: string;
  value: string | number;
}

const initialState: UserData = {
  name: "",
  tel: null,
  city: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<PayloadData>) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const { changeValue } = userSlice.actions;

export default userSlice.reducer;
