import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app'
import authReducer from './auth'
import languageReducer from './language'

export default combineReducers({
	app: appReducer,
	auth: authReducer,
	form: formReducer,
	router: routerReducer,
	language: languageReducer
})
