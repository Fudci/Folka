import {takeLatest, put} from 'redux-saga/effects';
import axios from 'axios';

function* getData(action) {
  try {
    const resMoviesUpcoming = yield axios({
      method: 'GET',
      url: `https://mocki.io/v1/52c41978-6e31-4ea3-b917-01899e3ed373`,
    });
    if (resMoviesUpcoming && resMoviesUpcoming.data) {
      yield put({
        type: 'GET_DATA_SUCCESS',
        data: resMoviesUpcoming.data,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: 'GET_DATA_FAILED',
      error: err.response.data.status_message,
    });
  }
}

function* Data() {
  yield takeLatest('GET_DATA', getData);
}

export default Data;
