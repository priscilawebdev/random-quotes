import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import appReducer from './app'
import languageReducer from './language'

export default combineReducers({
	app: appReducer,
	route: routerReducer,
	language: languageReducer
})
