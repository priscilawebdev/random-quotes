import { call, put, takeEvery, all } from 'redux-saga/effects'
import { actions as actionsMessages } from 'reducers/messages'
import { actions } from 'reducers/signUp'
import reduxSagaFirebase from '../api'

function* signUp({ values: { firstName, lastName, email, password } }) {
	try {
		const user = yield call(reduxSagaFirebase.auth.createUserWithEmailAndPassword, email, password)
		yield call(updateProfile, user, { displayName: `${firstName} ${lastName}` })
		yield put(actions.signUpSuccess())
	}	catch (error) {
		yield put(actions.signUpFailure())
		yield put(actionsMessages.emitNotification('error', error.message))
	}
}

function* updateProfile(user, data) {
	try {
		user.updateProfile(data)
	}	catch (error) {
		yield put(actionsMessages.emitNotification('error', error.message))
	}
}

export default function* rootSaga() {
	yield all([
		takeEvery(actions.SIGN_UP.ADD.REQUEST, signUp)
	])
}
