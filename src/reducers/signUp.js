const initialState = {
	registering: false,
	confirmedEmail: false,
	displayName: null
}

export default function reducer(state = initialState, { type, values }) {
	switch (type) {
		case actions.SIGN_UP.ADD.REQUEST:
			return {
				...state,
				displayName: `${values.firstName} ${values.lastName}`,
				registering: true
			}
		case actions.SIGN_UP.ADD.FAILURE:
		case actions.SIGN_UP.ADD.SUCCESS:
			return {
				...state,
				registering: false
			}
		default:
			return state
	}
}

export const actions = {
	SIGN_UP: {
		UPDATE: {
			REQUEST: 'SIGN_UP.UPDATE.REQUEST',
			SUCCESS: 'SIGN_UP.UPDATE.SUCCESS',
			FAILURE: 'SIGN_UP.UPDATE.FAILURE'
		},
		ADD: {
			REQUEST: 'SIGN_UP.ADD.REQUEST',
			SUCCESS: 'SIGN_UP.ADD.SUCCESS',
			FAILURE: 'SIGN_UP.ADD.FAILURE'
		}
	},
	signUp: values => ({
		type: actions.SIGN_UP.ADD.REQUEST,
		values
	}),
	signUpSuccess: () => ({
		type: actions.SIGN_UP.ADD.SUCCESS
	}),
	signUpFailure: () => ({
		type: actions.SIGN_UP.ADD.FAILURE
	}),
	update: values => ({
		type: actions.SIGN_UP.UPDATE.REQUEST,
		values
	})
}
