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
		case actions.SIGN_OUT.FAILURE:
			return {
				...state,
				loading: false
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
		REQUEST: 'random-quotes/SIGN_IN/SIGN_IN.REQUEST',
		SUCCESS: 'random-quotes/SIGN_IN/SIGN_IN.SUCCESS',
		FAILURE: 'random-quotes/SIGN_IN/SIGN_IN.FAILURE'
	},
	SIGN_OUT: {
		REQUEST: 'random-quotes/SIGN_IN/SIGN_OUT.REQUEST'
	},
	SYNC_USER: 'random-quotes/SIGN_IN/SYNC_USER',
	signIn: credentials => ({
		type: actions.SIGN_IN.REQUEST,
		credentials
	}),
	signInSuccess: credential => ({
		type: actions.SIGN_IN.SUCCESS,
		credential
	}),
	signInFailure: error => ({
		type: actions.SIGN_IN.FAILURE,
		error
	}),
	signOut: () => ({
		type: actions.SIGN_OUT.REQUEST
	}),
	syncUser: user => ({
		type: actions.SYNC_USER,
		user
	})
}
