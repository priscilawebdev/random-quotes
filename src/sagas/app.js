import { takeEvery, all, call, put } from 'redux-saga/effects'
import { actions as actionsMessages } from 'reducers/messages'
import { actions } from 'reducers/app'
import reduxSagaFirebase from '../api'

function* updateDate({ date }) {
	try {
		yield call(reduxSagaFirebase.database.update, 'date', date)
		yield put(actions.updateDateSuccess(date))
	} catch (error) {
		yield put(actionsMessages.emitNotification('error', error.message))
	}
}

export default function* rootSaga() {
	yield all([
		reduxSagaFirebase.database.sync(
			'date',
			{
				successActionCreator: actions.syncDate
			}
		),
		takeEvery(actions.DATE.UPDATE.REQUEST, updateDate)
	])
}
