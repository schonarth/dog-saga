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
      console.log("apiCallRequest", state, action);
      return { ...state, fetching: true, error: null };
    },
    apiCallSuccess(state, action) {
      console.log("apiCallSuccess", state, action);
      return { ...state, fetching: false, dog: action.payload };
    },
    apiCallFailure(state, action) {
      return { ...state, fetching: false, dog: null, error: action.error };
    },
  },
});

export const { apiCallRequest, apiCallSuccess, apiCallFailure } =
  dogsSlice.actions;

export default dogsSlice.reducer;
