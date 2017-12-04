import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import reducers from 'reducers'
import sagas from 'sagas'
import history from './history'

const config = {
	key: 'root',
	storage,
	blacklist: ['form']
}

config.debug = true

const reducer = persistReducer(config, reducers)

export default function configureStore() {
	const sagaMiddleware = createSagaMiddleware()

	const store = createStore(
		reducer,
		undefined,
		compose(
			applyMiddleware(sagaMiddleware, routerMiddleware(history)),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	)
	sagaMiddleware.run(sagas)

	persistStore(store)

	return store
}

