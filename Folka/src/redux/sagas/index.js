import {all} from 'redux-saga/effects';

import Data from './data';
export default function* rootSaga() {
  yield all([
  
    Data(),
  ]);
}
