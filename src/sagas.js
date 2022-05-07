import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  apiCallRequest,
  apiCallSuccess,
  apiCallFailure,
} from "./features/dogs/dogsSlice";

const API_URL = "https://dog.ceo/api/breeds/image/random";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(apiCallRequest, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDog(willItFail) {
  return axios({
    method: "get",
    // Introduce an error on the API to cause a failure
    // so we can test it
    url: willItFail ? API_URL + "1" : API_URL,
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    // Introducing a failure factor
    const willItFail = Math.random() < 0.1;
    if (willItFail) console.log("This fetch will fail");

    const response = yield call(fetchDog, willItFail);
    const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put(apiCallSuccess(dog));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(apiCallFailure(error));
  }
}
