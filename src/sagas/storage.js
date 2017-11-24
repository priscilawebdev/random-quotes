import { call, put, select, takeEvery, all } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { actions } from 'reducers/storage'
import reduxSagaFirebase from '../api'

function* syncFileUrl(path) {
	try {
		const url = yield call(reduxSagaFirebase.storage.getDownloadURL, path)
		yield put(actions.setFileURL(url))
	} catch (error) {
		console.error(error)
	}
}

function* sendFileSaga({ path }) {
	const file = yield select(state => state.storage.file)
	const task = reduxSagaFirebase.storage.uploadFile(path, file)
	const input = document.getElementById('TESTE')
	task.on('state_changed', (snapshot) => {
		input.css.width = (snapshot.bytesTransferred * 100) / snapshot.totalBytes
	})

	// Wait for upload to complete
	yield task

	// Do something on complete
}

export default function* rootSaga() {
	yield all([
		takeEvery(actions.SEND_FILE, sendFileSaga)
	])
}
