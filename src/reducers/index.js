import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import quotes from './quotes'
import auth from './auth'
import backgrounds from './backgrounds'
import storage from './storage'
import language from './language'

export default combineReducers({
	auth,
	quotes,
	backgrounds,
	storage,
	language,
	form,
	router
})
