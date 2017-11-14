import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Login from 'containers/Login'
import Grid from 'components/Grid'
import GridCell from 'components/GridCell'
import Icon from 'components/Icon'
import { Settings, Wrapper, Panel } from './styles'
import Header from './Header'
import Content from './Content'

class Preferences extends Component {
	constructor(props) {
		super(props)
		this.state = { showSettings: false, showQuotes: true }
		this.setShowSettings = ::this.setShowSettings
		this.setShowQuotes = ::this.setShowQuotes
	}

	setShowSettings() {
		this.setState({
			showSettings: !this.state.showSettings
		})
	}

	setShowQuotes(bool) {
		this.setState({
			showQuotes: bool
		})
	}

	render() {
		const { authenticated, backgrounds, quotes } = this.props
		const { showSettings, showQuotes } = this.state
		return (
			<Wrapper>
				<Icon name='settings' size={20} cursor='pointer' onClick={this.setShowSettings} />
				<Settings opacity={showSettings}>
					<Panel authenticated={!authenticated}>
						{
							!authenticated ? (
								<Grid columns>
									<GridCell>
										<Header setShowQuotes={this.setShowQuotes} />
									</GridCell>
									<GridCell>
										<Content
											backgrounds={backgrounds}
											quotes={quotes}
											showQuotes={showQuotes}
										/>
									</GridCell>
								</Grid>
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

Preferences.propTypes = {
	authenticated: PropTypes.bool.isRequired,
	backgrounds: PropTypes.array.isRequired,
	quotes: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
	...state.auth
})

export default connect(mapStateToProps)(Preferences)
