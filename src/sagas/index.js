import { all } from 'redux-saga/effects'
import { appSagas } from './app'

export default function* sagas() {
	yield all([
		...appSagas
	])
}
