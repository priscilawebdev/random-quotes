const initialState = {
	list: [],
	background: {},
	loading: false
}

export default function reducer(state = initialState, { type, backgrounds, background }) {
	switch (type) {
		case actions.BACKGROUNDS.SYNC:
			return {
				...state,
				list: backgrounds
			}
		case actions.BACKGROUNDS.ADD.REQUEST:
			return {
				...state,
				loading: true
			}
		case actions.BACKGROUNDS.ADD.SUCCESS:
			return {
				...state,
				loading: false
			}
		case actions.BACKGROUNDS.ADD.FAILURE:
			return {
				...state,
				loading: false
			}
		case actions.BACKGROUNDS.UPDATE.SUCCESS:
			return {
				...state,
				background
			}
		default:
			return state
	}
}

export const actions = {
	BACKGROUNDS: {
		SYNC: 'BACKGROUNDS.SYNC',
		REMOVE: {
			REQUEST: 'BACKGROUNDS.REMOVE.REQUEST',
			SUCCESS: 'BACKGROUNDS.REMOVE.SUCCESS',
			FAILURE: 'BACKGROUNDS.REMOVE.FAILURE'
		},
		ADD: {
			REQUEST: 'BACKGROUNDS.ADD.REQUEST',
			SUCCESS: 'BACKGROUNDS.ADD.SUCCESS',
			FAILURE: 'BACKGROUNDS.ADD.FAILURE'
		},
		UPDATE: {
			REQUEST: 'BACKGROUNDS.UPDATE.REQUEST',
			SUCCESS: 'BACKGROUNDS.UPDATE.SUCCESS',
			FAILURE: 'BACKGROUNDS.UPDATE.FAILURE'
		}
	},
	syncBackgrounds: backgrounds => ({
		type: actions.BACKGROUNDS.SYNC,
		backgrounds
	}),
	addBackground: background => ({
		type: actions.BACKGROUNDS.ADD.REQUEST,
		background
	}),
	addBackgroundSuccess: () => ({
		type: actions.BACKGROUNDS.ADD.SUCCESS
	}),
	removeBackground: id => ({
		type: actions.BACKGROUNDS.REMOVE.REQUEST,
		id
	}),
	updateBackground: background => ({
		type: actions.BACKGROUNDS.UPDATE.REQUEST,
		background
	}),
	updateBackgroundSuccess: background => ({
		type: actions.BACKGROUNDS.UPDATE.SUCCESS,
		background
	})
}
