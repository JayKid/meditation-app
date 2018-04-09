import { delay } from 'redux-saga'
import { put, takeEvery, all, select, call } from 'redux-saga/effects'

const minutesToMilliseconds = minutes => minutes * 60 * 1000;

export const getSessionDuration = state => {
    return minutesToMilliseconds(state.TimePicker.duration);
}

export function* startSession() {
  let sessionDuration = yield select(getSessionDuration);
  yield delay(sessionDuration)
  yield put({ type: 'sessionEnd' })
}

const playSessionEndSound = _ => {
    var audio = new Audio('http://freesound.org/data/previews/411/411088_5121236-lq.mp3');
    audio.play();
}

export function* endSession() {
    yield call(playSessionEndSound);
}
  

export function* watchSessionStartAsync() {
  yield takeEvery('sessionStart', startSession)
}

export function* watchSessionEndAsync() {
  yield takeEvery('sessionEnd', endSession)
}


export default function* rootSaga() {
    yield all([
        watchSessionStartAsync(),
        watchSessionEndAsync()
    ])
}