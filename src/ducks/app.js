const initialState = {
	data: {
		backgrounds: null,
		quotes: null
	},
	background: null,
	quote: null
}

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case actions.LOAD_DATA_FULFILLED:
			return {
				...state,
				data: { ...payload.data }
			}
		case actions.UPDATE_BACKGROUND_FULFILLED:
			return {
				...state,
				background: payload.background
			}
		case actions.UPDATE_QUOTE_FULFILLED:
			return {
				...state,
				quote: payload.quote
			}
		default:
			return state
	}
}

export const actions = {
	LOAD_DATA: 'random-quotes/app/LOAD_DATA',
	LOAD_DATA_FULFILLED: 'random-quotes/app/LOAD_DATA_FULFILLED',
	LOAD_DATA_FAILED: 'random-quotes/app/LOAD_DATA_FAILED',

	UPDATE_BACKGROUND: 'random-quotes/app/UPDATE_BACKGROUND',
	UPDATE_BACKGROUND_FULFILLED: 'random-quotes/app/UPDATE_BACKGROUND_FULFILLED',
	UPDATE_BACKGROUND_FAILED: 'random-quotes/app/UPDATE_BACKGROUND_FAILED',

	UPDATE_QUOTE: 'random-quotes/app/UPDATE_QUOTE',
	UPDATE_QUOTE_FULFILLED: 'random-quotes/app/UPDATE_QUOTE_FULFILLED',
	UPDATE_QUOTE_FAILED: 'random-quotes/app/UPDATE_QUOTE_FAILED',

	DEFAULT_LOCALE: 'en',

	loadData: () => ({
		type: actions.LOAD_DATA
	}),
	loadDataFulFilled: data => ({
		type: actions.LOAD_DATA_FULFILLED,
		payload: { data }
	}),
	loadDataFailed: error => ({
		type: actions.LOAD_DATA_FAILED,
		payload: { error }
	}),

	updateBackground: changes => ({
		type: actions.UPDATE_BACKGROUND,
		payload: { changes }
	}),
	updateBackgroundFulFilled: background => ({
		type: actions.UPDATE_BACKGROUND_FULFILLED,
		payload: { background }
	}),
	updateBackgroundFailed: error => ({
		type: actions.UPDATE_BACKGROUND_FAILED,
		payload: { error }
	}),

	updateQuote: changes => ({
		type: actions.UPDATE_QUOTE,
		payload: { changes }
	}),
	updateQuoteFulFilled: quote => ({
		type: actions.UPDATE_QUOTE_FULFILLED,
		payload: { quote }
	}),
	updateQuoteFailed: error => ({
		type: actions.UPDATE_QUOTE_FAILED,
		payload: { error }
	})
}
