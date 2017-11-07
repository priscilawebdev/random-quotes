const initialState = {
	authenticated: false,
	uid: null,
	user: null
}

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case actions.SIGN_IN_FULFILLED:
			return {
				...state,
				authenticated: true,
				uid: payload.uid,
				user: payload
			}
		case actions.SIGN_OUT_FULFILLED:
			return {
				...state,
				authenticated: false,
				uid: null,
				user: null
			}
		default:
			return state
	}
}

export const actions = {
	SIGN_IN: 'random-quotes/auth/SIGN_IN',
	SIGN_IN_FULFILLED: 'random-quotes/auth/SIGN_IN_FULFILLED',
	SIGN_IN_FAILED: 'random-quotes/auth/SIGN_IN_FAILED',

	SIGN_OUT: 'random-quotes/auth/SIGN_OUT',
	SIGN_OUT_FULFILLED: 'random-quotes/auth/SIGN_OUT_FULFILLED',
	SIGN_OUT_FAILED: 'random-quotes/auth/SIGN_OUT_FAILED',

	signInWithEmailAndPassword: (email, password) => ({
		type: actions.SIGN_IN,
		payload: { email, password }
	}),
	signInFulFilled: data => ({
		type: actions.SIGN_IN_FULFILLED,
		payload: { data }
	}),
	signInFailed: error => ({
		type: actions.SIGN_IN_FAILED,
		payload: { error }
	}),
	signOut: () => ({
		type: actions.SIGN_OUT
	}),
	signOutFulFilled: data => ({
		type: actions.SIGN_OUT_FULFILLED,
		payload: { data }
	}),
	signOutFailed: error => ({
		type: actions.SIGN_OUT_FAILED,
		payload: { error }
	})
}
