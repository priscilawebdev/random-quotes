import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
	<Route
		{...rest}
		render={props => authenticated ? (
			<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: props.location }
					}}
				/>
			)}
	/>
)

PrivateRoute.propTypes = {
	component: PropTypes.element.isRequired,
	authenticated: PropTypes.bool.isRequired,
	location: PropTypes.object.isRequired
}

export default PrivateRoute
