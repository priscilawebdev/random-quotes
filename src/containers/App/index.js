import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'

import Screen from 'components/Screen'
import HomePage from 'containers/HomePage/Loadable'

export default function App() {
	return (
		<div className='AppWrapper'>
			<Screen>
				<Switch>
					<Route exact path='/' component={HomePage} />
				</Switch>
			</Screen>
		</div>
	)
}
