const initialState = {
	list: [],
	quote: {}
}

export default function reducer(state = initialState, { type, quotes, quote }) {
	switch (type) {
		case actions.QUOTES.SYNC:
			return {
				...state,
				list: quotes
			}
		case actions.QUOTES.ADD.REQUEST:
			return {
				...state,
				loading: true
			}
		case actions.QUOTES.ADD.SUCCESS:
			return {
				...state,
				loading: false
			}
		case actions.QUOTES.ADD.FAILURE:
			return {
				...state,
				loading: false
			}
		case actions.QUOTES.UPDATE.SUCCESS:
			return {
				...state,
				quote
			}
		default:
			return state
	}
}

export const actions = {
	QUOTES: {
		SYNC: 'QUOTES.SYNC',
		REMOVE: {
			REQUEST: 'QUOTES.REMOVE.REQUEST',
			SUCCESS: 'QUOTES.REMOVE.SUCCESS',
			FAILURE: 'QUOTES.REMOVE.FAILURE'
		},
		ADD: {
			REQUEST: 'QUOTES.ADD.REQUEST',
			SUCCESS: 'QUOTES.ADD.SUCCESS',
			FAILURE: 'QUOTES.ADD.FAILURE'
		},
		UPDATE: {
			REQUEST: 'QUOTES.UPDATE.REQUEST',
			SUCCESS: 'QUOTES.UPDATE.SUCCESS',
			FAILURE: 'QUOTES.UPDATE.FAILURE'
		}
	},
	syncQuotes: quotes => ({
		type: actions.QUOTES.SYNC,
		quotes
	}),
	addQuote: quote => ({
		type: actions.QUOTES.ADD.REQUEST,
		quote
	}),
	removeQuote: id => ({
		type: actions.QUOTES.REMOVE.REQUEST,
		id
	}),
	updateQuote: quote => ({
		type: actions.QUOTES.UPDATE.REQUEST,
		quote
	}),
	updateQuoteSuccess: quote => ({
		type: actions.QUOTES.UPDATE.SUCCESS,
		quote
	})
}
