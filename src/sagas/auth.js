import { put, call, take, fork } from 'redux-saga/effects'
import { actions } from 'ducks/auth'
import reduxSagaFirebase from '../api'
import history from '../history'

function* signIn(email, password) {
	try {
		const authData = yield call(reduxSagaFirebase.auth.signInWithEmailAndPassword, email, password)
		yield put(actions.signInFulFilled(authData.data))
		yield history.push('/')
	}	catch (error) {
		yield put(actions.signInFailed(error))
	}
}

function* signOut() {
	try {
		const data = yield call(reduxSagaFirebase.auth.signOut)
		yield put(actions.signOutFulFilled(data))
		yield history.replace('/sign-in')
	}	catch (error) {
		yield put(actions.signOutFailed(error))
	}
}

//= ====================================
//  WATCHERS
//-------------------------------------

function* watchSignIn() {
	while (true) {
		const { payload } = yield take(actions.SIGN_IN)
		yield fork(signIn, payload.email, payload.password)
	}
}

function* watchSignOut() {
	while (true) {
		yield take(actions.SIGN_OUT)
		yield fork(signOut)
	}
}

//= ====================================
//  AUTH SAGAS
//-------------------------------------
export const authSagas = [
	fork(watchSignIn),
	fork(watchSignOut)
]
