const initialState = {
	date: ''
}

export default function reducer(state = initialState, { type, date }) {
	switch (type) {
		case actions.DATE.SYNC:
			return {
				...state,
				date
			}
		case actions.DATE.UPDATE.SUCCESS:
			return {
				...state,
				date
			}
		default:
			return state
	}
}

export const actions = {
	DATE: {
		SYNC: 'DATE.SYNC',
		UPDATE: {
			REQUEST: 'DATE.UPDATE.REQUEST',
			SUCCESS: 'DATE.UPDATE.SUCCESS',
			FAILURE: 'DATE.UPDATE.FAILURE'
		}
	},
	syncDate: date => ({
		type: actions.DATE.SYNC,
		date
	}),
	updateDate: date => ({
		type: actions.DATE.UPDATE.REQUEST,
		date
	}),
	updateDateSuccess: date => ({
		type: actions.DATE.UPDATE.SUCCESS,
		date
	})
}
