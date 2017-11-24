import { call, put, select, takeEvery, all } from 'redux-saga/effects'
import { actions } from 'reducers/quotes'
import reduxSagaFirebase from '../api'

function* addQuote({ quote: { description, author } }) {
	const user = yield select(state => state.auth.user)
	yield call(reduxSagaFirebase.database.create, 'quotes', {
		creator: user ? user.uid : null, vcount: 0, like: false, description, author
	})
}

function* removeQuote({ id }) {
	try {
		yield call(reduxSagaFirebase.database.delete, `quotes/${id}`)
	} catch (error) {
		console.log(error)
	}
}

function* updateQuote({ quote }) {
	const changes = quote
	delete changes.id
	try {
		yield call(reduxSagaFirebase.database.update, `quotes/${quote.id}`, changes)
		yield put(actions.updateQuoteSuccess(quote))
	} catch (error) {
		console.log('error', error)
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
