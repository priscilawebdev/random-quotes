const initialState = {
	loading: false,
	authenticated: false,
	user: null
}

export default function reducer(state = initialState, { type, user }) {
	switch (type) {
		case actions.SIGN_IN.REQUEST:
		case actions.SIGN_OUT.REQUEST:
			return {
				...state,
				loading: true
			}
		case actions.SIGN_IN.SUCCESS:
			return {
				...state,
				loading: false,
				authenticated: true
			}
		case actions.SIGN_OUT.FAILURE:
		case actions.SIGN_IN.FAILURE:
			return {
				...state,
				loading: false
			}
		case actions.SIGN_OUT.SUCCESS:
			return {
				...state,
				loading: false,
				authenticated: false
			}
		case actions.SYNC_USER:
			return {
				...state,
				authenticated: user != null,
				user
			}
		default:
			return state
	}
}

export const actions = {
	SIGN_IN: {
		REQUEST: 'SIGN_IN.REQUEST',
		SUCCESS: 'SIGN_IN.SUCCESS',
		FAILURE: 'SIGN_IN.FAILURE'
	},
	SIGN_OUT: {
		REQUEST: 'SIGN_OUT.REQUEST',
		SUCCESS: 'SIGN_OUT.SUCCESS',
		FAILURE: 'SIGN_OUT.FAILURE'
	},
	SYNC_USER: 'SYNC_USER',
	signIn: credentials => ({
		type: actions.SIGN_IN.REQUEST,
		credentials
	}),
	signInSuccess: credential => ({
		type: actions.SIGN_IN.SUCCESS,
		credential
	}),
	signOut: () => ({
		type: actions.SIGN_OUT.REQUEST
	}),
	signOutSuccess: () => ({
		type: actions.SIGN_OUT.SUCCESS
	}),
	syncUser: user => ({
		type: actions.SYNC_USER,
		user
	})
}
