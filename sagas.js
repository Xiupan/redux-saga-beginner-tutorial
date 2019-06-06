import { put, takeEvery, all } from "redux-saga/effects";

const delay = milliseconds => new Promise(res => setTimeout(res, milliseconds));
// const delay = ms => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
  console.log("inside increment async saga");
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* helloSaga() {
  console.log("Hello Sagas!");
}

export default function* rootSaga() {
  yield [watchIncrementAsync(), helloSaga()];
}
