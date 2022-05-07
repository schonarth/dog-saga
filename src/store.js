import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dogsReducer from "./features/dogs/dogsSlice";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers({
    dogs: dogsReducer,
  }),
  middleware: (getDefaultMiddleware) => [sagaMiddleware],

  devTools: true,
});

sagaMiddleware.run(watcherSaga);

export default store;
