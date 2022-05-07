import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from "./redux";
import {
  apiCallRequest,
  apiCallSuccess,
  apiCallFailure,
} from "./features/dogs/dogsSlice";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  // yield takeLatest(API_CALL_REQUEST, workerSaga);
  yield takeLatest(apiCallRequest, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random",
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put(apiCallSuccess(dog));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: API_CALL_FAILURE, error });
  }
}
