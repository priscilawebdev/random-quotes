import { select, all, takeEvery, put, take } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { actions } from 'reducers/storage'
import reduxSagaFirebase from '../api'

function* sendFile({ path }) {
	try {
		const file = yield select(state => state.storage.file)
		const task = reduxSagaFirebase.storage.uploadFile(path, file)
		const channel = eventChannel(emit => task.on('state_changed', emit))
		yield take(channel)
		// Wait for upload to complete
		yield task
		yield put(actions.sendFileSuccess(task.snapshot.downloadURL))
	} catch (err) {
		console.log(err)
	}
}

export default function* rootSaga() {
	yield all([
		takeEvery(actions.SEND_FILE.REQUEST, sendFile)
	])
}
