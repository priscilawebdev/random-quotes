import React from 'react'
import ReactDOM from 'react-dom'
import ConnectedRouter from 'react-router-redux/ConnectedRouter'
import Provider from 'react-redux/lib/components/Provider'
import createHistory from 'history/createBrowserHistory'

import LanguageProvider from 'containers/LanguageProvider'
import App from 'containers/App'
import store from './store'

const history = createHistory()
const root = document.getElementById('root')

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<LanguageProvider>
				<ConnectedRouter history={history}>
					<App />
				</ConnectedRouter>
			</LanguageProvider>
		</Provider>,
		root
	)
}


if (module.hot) {
	module.hot.accept('./containers/App', () => {
		ReactDOM.unmountComponentAtNode(root)
		render()
	})
}


// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
	(new Promise((resolve) => {
		resolve(import('intl'))
	}))
	.then(() => render())
	.catch((err) => {
		throw err
	})
} else {
	render()
}
