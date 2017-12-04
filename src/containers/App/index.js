import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import HomePage from 'containers/HomePage'
import Login from 'containers/Login'

const App = () => (
	<MuiThemeProvider>
		<div className='AppWrapper'>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/login' component={Login} />
			</Switch>
		</div>
	</MuiThemeProvider>
)

export default App
