import { call, fork, put, take, takeEvery, all } from 'redux-saga/effects'
import { actions } from 'reducers/auth'
import reduxSagaFirebase from '../api'

function* loginSaga({ credentials: { email, password } }) {
	try {
		const data = yield call(reduxSagaFirebase.auth.signInWithEmailAndPassword, email, password)
		yield put(actions.loginSuccess(data))
	} catch (error) {
		yield put(actions.loginFailure(error))
	}
}

function* logoutSaga() {
	try {
		const data = yield call(reduxSagaFirebase.auth.signOut)
		yield put(actions.loginSuccess(data))
	} catch (error) {
		yield put(actions.loginFailure(error))
	}
}

function* syncUserSaga() {
	const channel = yield call(reduxSagaFirebase.auth.channel)

	while (true) {
		const { user } = yield take(channel)

		if (user) yield put(actions.syncUser(user))
		else yield put(actions.syncUser(null))
	}
}

export default function* rootSaga() {
	yield fork(syncUserSaga)
	yield all([
		takeEvery(actions.LOGIN.REQUEST, loginSaga),
		takeEvery(actions.LOGOUT.REQUEST, logoutSaga)
	])
}
