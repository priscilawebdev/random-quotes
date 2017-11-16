import React, { Component } from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GridList, GridTile } from 'material-ui/GridList'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { actions } from 'ducks/app'
import Login from 'containers/Login'
import Icon from 'components/Icon'
import { Settings, Wrapper, Panel } from './styles'
import Header from './Header'
import Content from './Content'
import messages from './messages'

class Preferences extends Component {
	constructor(props) {
		super(props)
		this.state = { showSettings: false, showQuotes: true }
		this.setShowSettings = ::this.setShowSettings
		this.setShowQuotes = ::this.setShowQuotes
		this.deleteData = ::this.deleteData
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

	deleteData(path, key) {
		const { handleDeleteData } = this.props
		handleDeleteData(path, key)
	}

	render() {
		const { intl, authenticated, backgrounds, quotes } = this.props
		const { showSettings, showQuotes } = this.state
		return (
			<Wrapper>
				<Icon name='settings' cursor='pointer' rotate46={showSettings} onClick={this.setShowSettings} sm />
				<Settings opacity={showSettings}>
					<Panel authenticated={authenticated}>
						{
							authenticated ? (
								<GridList
									style={{ flexDirection: 'column', margin: 0 }}
									padding={0}
									cols={1}
									cellHeight='auto'
								>
									<GridTile>
										<Header setShowQuotes={this.setShowQuotes} />
									</GridTile>
									<GridTile style={{ display: 'flex', justifyContent: 'flex-end', padding: 10, paddingRight: 12 }}>
										<RaisedButton
											label={intl.formatMessage(showQuotes ? messages.quotes : messages.photos)}
											icon={<ContentAdd />}
											onClick={() => console.log('oioioi')}
										/>
									</GridTile>
									<GridTile>
										<Content
											backgrounds={backgrounds}
											quotes={quotes}
											showQuotes={showQuotes}
											deleteData={this.deleteData}
										/>
									</GridTile>
								</GridList>
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
	quotes: PropTypes.array.isRequired,
	handleDeleteData: PropTypes.func.isRequired,
	intl: intlShape
}

const mapStateToProps = state => ({
	...state.auth
})

const mapDispatchToProps = {
	handleDeleteData: actions.deleteData
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Preferences))
