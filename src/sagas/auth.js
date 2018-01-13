import { call, fork, put, take, takeEvery, all } from 'redux-saga/effects'
import { actions as actionsMessages } from 'reducers/messages'
import { actions } from 'reducers/auth'
import reduxSagaFirebase from '../api'

function* signIn({ credentials: { email, password } }) {
	try {
		const data = yield call(reduxSagaFirebase.auth.signInWithEmailAndPassword, email, password)
		yield put(actions.signInSuccess(data))
	} catch (error) {
		yield put(actionsMessages.emitNotification('error', error.message))
	}
}

function* signOut() {
	try {
		const data = yield call(reduxSagaFirebase.auth.signOut)
		yield put(actions.signOutSuccess(data))
	} catch (error) {
		yield put(actionsMessages.emitNotification('error', error.message))
	}
}

function* syncUser() {
	const channel = yield call(reduxSagaFirebase.auth.channel)
	while (true) {
		const { user } = yield take(channel)
		if (user) yield put(actions.syncUser(user))
		else yield put(actions.syncUser(null))
	}
}

export default function* rootSaga() {
	yield fork(syncUser)
	yield all([
		takeEvery(actions.SIGN_IN.REQUEST, signIn),
		takeEvery(actions.SIGN_OUT.REQUEST, signOut)
	])
}
