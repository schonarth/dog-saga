import { createSlice } from "@reduxjs/toolkit";

const dogsSlice = createSlice({
  name: "dogs",
  initialState: {
    fetching: false,
    dog: null,
    error: null,
  },
  reducers: {
    apiCallRequest(state, action) {
      return { ...state, fetching: true, error: null };
    },
    apiCallSuccess(state, action) {
      return { ...state, fetching: false, dog: action.payload };
    },
    apiCallFailure(state, action) {
      return { ...state, fetching: false, dog: null, error: action.payload };
    },
  },
});

export const { apiCallRequest, apiCallSuccess, apiCallFailure } =
  dogsSlice.actions;

export default dogsSlice.reducer;
