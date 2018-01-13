const initialState = {
	locale: 'en'
}

export default function reducer(state = initialState, { payload, type }) {
	switch (type) {
		case actions.CHANGE_LOCALE:
			return { ...state, locale: payload.locale }
		default:
			return state
	}
}

export const actions = {
	CHANGE_LOCALE: 'random-quotes/language/CHANGE_LOCALE',
	changeLocale: locale => ({
		type: actions.CHANGE_LOCALE,
		payload: { locale }
	})

}
