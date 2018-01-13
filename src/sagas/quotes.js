import { call, put, select, takeEvery, all } from 'redux-saga/effects'
import { actions as actionsMessages } from 'reducers/messages'
import { actions } from 'reducers/quotes'
import reduxSagaFirebase from '../api'

function* addQuote({ quote: { description, author } }) {
	try {
		const user = yield select(state => state.auth.user)
		yield call(reduxSagaFirebase.database.create, 'quotes', {
			creator: user ? user.uid : null, vcount: 0, description, author
		})
	} catch (error) {
		yield put(actionsMessages.emitNotification('error', error.message))
	}
}

function* removeQuote({ id }) {
	try {
		yield call(reduxSagaFirebase.database.delete, `quotes/${id}`)
	} catch (error) {
		yield put(actionsMessages.emitNotification('error', error.message))
	}
}

function* updateQuote({ quote: { id, ...rest } }) {
	try {
		yield call(reduxSagaFirebase.database.update, `quotes/${id}`, rest)
		yield put(actions.updateQuoteSuccess({ id, ...rest }))
	} catch (error) {
		yield put(actionsMessages.emitNotification('error', error.message))
	}
}

export default function* rootSaga() {
	const quotesTransformer = ({ value }) => Object.keys(value).map(key => ({
		...value[key],
		id: key
	}))
	yield all([
		reduxSagaFirebase.database.sync(
			'quotes',
			{
				successActionCreator: actions.syncQuotes,
				transform: quotesTransformer
			}
		),
		takeEvery(actions.QUOTES.ADD.REQUEST, addQuote),
		takeEvery(actions.QUOTES.UPDATE.REQUEST, updateQuote),
		takeEvery(actions.QUOTES.REMOVE.REQUEST, removeQuote)
	])
}
