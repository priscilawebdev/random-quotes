import React, { Component } from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import glamorous from 'glamorous'
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'

import Login from 'containers/Login'
import { IconContainer, Settings, Panel, Wrapper, Img } from './styles'
import ImgSettings from './img/settings.svg'
import messages from './messages'

class Preferences extends Component {
	constructor(props) {
		super(props)
		this.state = { showSettings: false }
		this.setShowSettings = ::this.setShowSettings
	}

	setShowSettings() {
		this.setState({
			showSettings: !this.state.showSettings
		})
	}

	render() {
		const { authenticated, backgrounds, intl } = this.props
		const { showSettings } = this.state
		return (
			<Wrapper>
				<IconContainer rotate={showSettings}>
					<glamorous.Img name='settings' src={ImgSettings} onClick={this.setShowSettings} />
				</IconContainer>
				<Settings opacity={showSettings}>
					<Panel authenticated={!authenticated}>
						{ !authenticated ? (
							<glamorous.Div>
								<glamorous.Div float='left' style={{ width: 'calc(50% - 1px)' }}>
									<RaisedButton
										label={intl.formatMessage(messages.photos)}
										fullWidth
									/>
								</glamorous.Div>
								<glamorous.Div float='right' style={{ width: 'calc(50% - 1px)' }}>
									<RaisedButton
										label={intl.formatMessage(messages.quotes)}
										fullWidth
									/>
								</glamorous.Div>
								<ul>
									{
										backgrounds.map(background => (
											<li key={background.key}>
												<Img url={background.url} />
											</li>
										))
									}
								</ul>
							</glamorous.Div>
						) : (<Login />) }
					</Panel>
				</Settings>
			</Wrapper>
		)
	}
}

Preferences.propTypes = {
	authenticated: PropTypes.bool.isRequired,
	backgrounds: PropTypes.array.isRequired,
	intl: intlShape
}

const mapStateToProps = state => ({
	...state.auth
})

export default connect(mapStateToProps)(injectIntl(Preferences))
