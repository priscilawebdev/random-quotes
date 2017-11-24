import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, autoRehydrate } from 'redux-persist'
import { REHYDRATE } from 'redux-persist/constants'
import createActionBuffer from 'redux-action-buffer'
import reducers from 'reducers'
import sagas from 'sagas'
import history from './history'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	reducers,
	compose(
		applyMiddleware(sagaMiddleware, routerMiddleware(history), createActionBuffer(REHYDRATE)),
		autoRehydrate(),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)

sagaMiddleware.run(sagas)

persistStore(store)

export default store
