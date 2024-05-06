import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRole: null,
  token: null
};

export const renterSlice = createSlice({
  name: "renter",
  initialState,
  reducers: {
    setLogin: (state, action) => {
     
      state.userRole =  action.payload.renter;
      state.token = action.payloadtoken;
    },
    setLogout: (state) => {
      state.renter = null;
      state.token = null;
    },
  }
});

export const { setLogin, setLogout } = renterSlice.actions;
export default renterSlice.reducer;
