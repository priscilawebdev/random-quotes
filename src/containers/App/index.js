import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HomePage from 'containers/HomePage'
import Login from 'containers/Login'
import Wrapper from './indexStyles'

const App = () => (
	<Wrapper>
		<MuiThemeProvider>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/login' component={Login} />
			</Switch>
		</MuiThemeProvider>
	</Wrapper>
)

export default App
