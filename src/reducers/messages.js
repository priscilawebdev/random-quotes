const initialState = {
	show: false,
	type: null,
	message: ''
}

export default function reducer(state = initialState, { type, values }) {
	switch (type) {
		case actions.DESTROY_NOTIFICATION:
			return initialState
		case actions.EMIT_NOTIFICATION:
			return {
				...state,
				type: values.type,
				message: values.content,
				show: true
			}
		default:
			return state
	}
}

export const actions = {
	EMIT_NOTIFICATION: 'EMIT_NOTIFICATION',
	DESTROY_NOTIFICATION: 'DESTROY_NOTIFICATION',
	emitNotification: (type, content) => ({
		type: actions.EMIT_NOTIFICATION,
		values: { type, content }
	}),
	destroyNotification: () => ({
		type: actions.DESTROY_NOTIFICATION
	})
}
