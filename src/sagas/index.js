import { all } from 'redux-saga/effects'
import { appSagas } from './app'
import { authSagas } from './auth'

export default function* sagas() {
	yield all([
		...appSagas,
		...authSagas
	])
}
