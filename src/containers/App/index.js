import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import HomePage from 'containers/HomePage/Loadable'
import Login from 'containers/Login/Loadable'

const App = () => (
	<div className='AppWrapper'>
		<MuiThemeProvider>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/login' component={Login} />
			</Switch>
		</MuiThemeProvider>
	</div>
)

export default App
