import { all } from 'redux-saga/effects'
import app from './app'
import signUp from './signUp'
import auth from './auth'
import quotes from './quotes'
import backgrounds from './backgrounds'
import storage from './storage'

export default function* rootSaga() {
	yield all([auth(), backgrounds(), quotes(), storage(), app(), signUp()])
}
