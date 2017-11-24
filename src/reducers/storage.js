const initialState = {
	file: null,
	loading: false,
	url: null,
	progress: 0
}

export default function reducer(state = initialState, { type, file, url, progress }) {
	switch (type) {
		case actions.SET_FILE:
			return {
				...state,
				file
			}
		case actions.SET_FILE_URL:
			return {
				...state,
				loading: false,
				url
			}
		case actions.SEND_FILE:
			return {
				...state,
				loading: true
			}
		case actions.SET_PROGRESS:
			return {
				...state,
				progress
			}
		default:
			return state
	}
}

export const actions = {
	SEND_FILE: 'SEND_FILE',
	SET_FILE: 'SET_FILE',
	SET_FILE_URL: 'SET_FILE_URL',
	SET_PROGRESS: 'SET_PROGRESS',
	setFile: file => ({
		type: actions.SET_FILE,
		file
	}),
	setFileURL: url => ({
		type: actions.SET_FILE_URL,
		url
	}),
	sendFile: path => ({
		type: actions.SEND_FILE,
		path
	}),
	setProgress: progress => ({
		type: actions.SET_PROGRESS,
		progress
	})
}
