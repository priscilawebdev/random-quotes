import { call, put, take, takeEvery, select, all } from 'redux-saga/effects'
import { actions as actionsStorage } from 'reducers/storage'
import { actions as actionsMessages } from 'reducers/messages'
import { actions } from 'reducers/backgrounds'
import reduxSagaFirebase from '../api'

function* addBackground({ background: { file, name, by, link = null } }) {
	try {
		yield put(actionsStorage.setFile(file))
		yield put(actionsStorage.sendFile(`backgrounds/${file.name}`))
		const { url } = yield take(actionsStorage.SEND_FILE.SUCCESS)
		const user = yield select(state => state.auth.user)
		yield call(reduxSagaFirebase.database.create, 'backgrounds', {
			creator: user ? user.uid : null, vcount: 0, url, name, by, link
		})
		yield put(actions.addBackgroundSuccess())
	} catch (error) {
		yield put(actionsMessages.emitNotification('error', error.message))
	}
}

function* removeBackground({ id }) {
	try {
		yield call(reduxSagaFirebase.database.delete, `backgrounds/${id}`)
	} catch (error) {
		yield put(actionsMessages.emitNotification('error', error.message))
	}
}

function* updateBackground({ background: { id, ...rest } }) {
	try {
		yield call(reduxSagaFirebase.database.update, `backgrounds/${id}`, rest)
		yield put(actions.updateBackgroundSuccess({ id, ...rest }))
	} catch (error) {
		yield put(actionsMessages.emitNotification('error', error.message))
	}
}

export default function* rootSaga() {
	const backgroundsTransformer = ({ value }) => Object.keys(value).map(key => ({
		...value[key],
		id: key
	}))

	yield all([
		reduxSagaFirebase.database.sync(
			'backgrounds',
			{
				successActionCreator: actions.syncBackgrounds,
				transform: backgroundsTransformer
			}
		),
		takeEvery(actions.BACKGROUNDS.ADD.REQUEST, addBackground),
		takeEvery(actions.BACKGROUNDS.UPDATE.REQUEST, updateBackground),
		takeEvery(actions.BACKGROUNDS.REMOVE.REQUEST, removeBackground)
	])
}
