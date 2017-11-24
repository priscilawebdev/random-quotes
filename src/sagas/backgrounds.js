import { call, put, takeEvery, all, select } from 'redux-saga/effects'
import { actions } from 'reducers/backgrounds'
import reduxSagaFirebase from '../api'

function* addBackground({ by, from, link }) {
	const user = yield select(state => state.auth.user)
	const url = yield select(state => state.auth.storage.url)

	yield call(reduxSagaFirebase.database.create, 'backgrounds', {
		creator: user ? user.uid : null, vcount: 0, url, by, from, link
	})
}

function* removeBackground({ id }) {
	try {
		yield call(reduxSagaFirebase.database.delete, `backgrounds/${id}`)
	} catch (error) {
		console.log(error)
	}
}

function* updateBackground({ background: { id, ...rest } }) {
	try {
		yield call(reduxSagaFirebase.database.update, `backgrounds/${id}`, rest)
		yield put(actions.updateBackgroundSuccess({ id, ...rest }))
	} catch (error) {
		console.log('error', error)
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
