const initialState = {
	loading: false,
	authenticated: false,
	user: null
}

export default function reducer(state = initialState, { type, user }) {
	switch (type) {
		case actions.LOGIN.REQUEST:
		case actions.LOGOUT.REQUEST:
			return {
				...state,
				loading: true
			}
		case actions.LOGIN.SUCCESS:
			return {
				...state,
				loading: false,
				authenticated: true
			}
		case actions.LOGIN.FAILURE:
			return {
				...state,
				loading: false
			}
		case actions.LOGOUT.SUCCESS:
			return {
				...state,
				loading: false,
				authenticated: false
			}
		case actions.LOGOUT.FAILURE:
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
	REGISTER: {
		REQUEST: 'random-quotes/register/REGISTER.REQUEST',
		SUCCESS: 'random-quotes/register/REGISTER.SUCCESS',
		FAILURE: 'random-quotes/register/REGISTER.FAILURE'
	},
	login: credentials => ({
		type: actions.LOGIN.REQUEST,
		credentials
	}),
	loginSuccess: credential => ({
		type: actions.LOGIN.SUCCESS,
		credential
	}),
	loginFailure: error => ({
		type: actions.LOGIN.FAILURE,
		error
	}),
	logout: () => ({
		type: actions.LOGOUT.REQUEST
	}),
	syncUser: user => ({
		type: actions.SYNC_USER,
		user
	})
}
