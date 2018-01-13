import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import app from './app'
import quotes from './quotes'
import auth from './auth'
import signUp from './signUp'
import backgrounds from './backgrounds'
import storage from './storage'
import language from './language'
import messages from './messages'

const reducers = {
	router,
	language,
	storage,
	app,
	signUp,
	auth,
	quotes,
	backgrounds,
	form,
	messages
}

export default combineReducers(reducers)
