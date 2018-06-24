import { delay } from 'redux-saga'
import { put, takeEvery, all, select, call } from 'redux-saga/effects'
import NoSleep from 'nosleep.js'

let noSleep = new NoSleep();
const minutesToMilliseconds = minutes => minutes * 60 * 1000;

export const getSleepPreventionStatus = state => state.TimePicker.preventSleep;

export const getSessionDuration = state => {
    return minutesToMilliseconds(state.TimePicker.duration);
}

const startNoSleep = _ => {
    noSleep.enable();
}

const stopNoSleep = _ => {
    noSleep.disable();
}

export function* startSession() {
  let sessionDuration = yield select(getSessionDuration);
  yield delay(sessionDuration)
  yield put({ type: 'sessionEnd' })
}

export function* preventSleep() {
  let isSleepPreventionModeOn = yield select(getSleepPreventionStatus);
  if (isSleepPreventionModeOn) {
    yield call(startNoSleep);
  }

}
export function* reenableSleep() {
  let isSleepPreventionModeOn = yield select(getSleepPreventionStatus);
  if (isSleepPreventionModeOn) {
    yield call(stopNoSleep);
  }
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
  yield takeEvery('sessionStart', preventSleep)
}

export function* watchSessionEndAsync() {
  yield takeEvery('sessionEnd', endSession)
  yield takeEvery('sessionEnd', reenableSleep)
}


export default function* rootSaga() {
    yield all([
        watchSessionStartAsync(),
        watchSessionEndAsync()
    ])
}