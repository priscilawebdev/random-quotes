import { put, call, all, takeLatest, take, fork } from 'redux-saga/effects'
import { actions } from 'ducks/app'
import reduxSagaFirebase from '../api'

function* getData() {
	try {
		let [backgrounds, quotes] = yield all([
			call(reduxSagaFirebase.database.read, 'backgrounds'),
			call(reduxSagaFirebase.database.read, 'quotes')
		])
		backgrounds = objectToArray(backgrounds)
		quotes = objectToArray(quotes)
		yield put(actions.loadDataFulFilled({ backgrounds, quotes }))
	} catch (error) {
		yield put(actions.loadDataFailed(error))
	}
}

export const objectToArray = (objects) => {
	const returnArr = []
	const keys = Object.keys(objects)

	for (let i = 0; i < keys.length; i += 1) {
		const key = keys[i]
		returnArr.push({ key, ...objects[key] })
	}

	return returnArr
}

function* updateBackground(changes) {
	try {
		yield call(reduxSagaFirebase.database.update, `backgrounds/${changes.key}`, changes)
		yield put(actions.updateBackgroundFulFilled(changes))
	} catch (error) {
		yield put(actions.updateBackgroundFailed(error))
	}
}

function* updateQuote(changes) {
	try {
		yield call(reduxSagaFirebase.database.update, `quotes/${changes.key}`, changes)
		yield put(actions.updateQuoteFulFilled(changes))
	} catch (error) {
		yield put(actions.updateQuoteFailed(error))
	}
}


//= ====================================
//  WATCHERS
//-------------------------------------

function* watchUpdateBackground() {
	while (true) {
		const { payload } = yield take(actions.UPDATE_BACKGROUND)
		yield fork(updateBackground, payload.changes)
	}
}

function* watchUpdateQuote() {
	while (true) {
		const { payload } = yield take(actions.UPDATE_QUOTE)
		yield fork(updateQuote, payload.changes)
	}
}
//= ====================================
//  APP SAGAS
//-------------------------------------
export const appSagas = [
	takeLatest(actions.LOAD_DATA, getData),
	fork(watchUpdateBackground),
	fork(watchUpdateQuote)
]
