import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Login from 'containers/Login'
import Icon from 'components/Icon'
import SubPanel from './SubPanel'
import { Settings, Wrapper, Panel } from './styles'

class Preferences extends Component {

	static propTypes = {
		authenticated: PropTypes.bool.isRequired,
		quotes: PropTypes.array.isRequired,
		backgrounds: PropTypes.array.isRequired
	}

	constructor() {
		super()
		this.state = { showSettings: false }
	}

	render() {
		const { authenticated, quotes, backgrounds } = this.props
		const { showSettings } = this.state
		return (
			<Wrapper>
				<Icon
					name='settings'
					cursor='pointer'
					rotate46={showSettings}
					onClick={() => this.setState({ showSettings: !this.state.showSettings })}
					sm
				/>
				<Settings display={showSettings}>
					<Panel authenticated={authenticated}>
						{
							authenticated ? (
								<SubPanel quotes={quotes} backgrounds={backgrounds} />
							) : (
								<Login />
							)
						}
					</Panel>
				</Settings>
			</Wrapper>
		)
	}
}

const mapStateToProps = state => ({
	authenticated: state.auth.authenticated
})

export default connect(mapStateToProps)(Preferences)
