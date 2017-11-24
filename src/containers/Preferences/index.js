import React, { Component } from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GridList, GridTile } from 'material-ui/GridList'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Login from 'containers/Login'
import { Add as AddQuote } from 'containers/Quote/Add'
import { Add as AddBackground } from 'containers/Background/Add'
import Icon from 'components/Icon'
import { actions as QtsActions } from 'reducers/quotes'
import { actions as BgsActions } from 'reducers/backgrounds'
import { actions as StogActions } from 'reducers/storage'
import { Settings, Wrapper, Panel } from './styles'
import Header from './Header'
import Content from './Content'
import messages from './messages'

class Preferences extends Component {
	state = { showSettings: false, showQuotes: true, openDialog: false }

	handleShowSettings = () => this.setState({ showSettings: !this.state.showSettings })

	handleShowQuotes = bool => this.setState({ showQuotes: bool })

	handleOpenDialog = bool => this.setState({ openDialog: bool })

	handleRemoveQuote = id => this.props.handleRemoveQuote(id)

	handleRemoveBackground = id => this.props.handleRemoveBackground(id)

	handleAddQuote = (values) => {
		this.props.handleAddQuote(values)
		this.handleOpenDialog(false)
	}

	handleAddBackground = (values) => {
		this.props.handleSetFile(values.file)
		this.props.handleSendFile(`backgrounds/${values.file.name}`)
	}

	render() {
		const { intl, authenticated, backgrounds, quotes, progress } = this.props
		const { showSettings, showQuotes, openDialog } = this.state
		return (
			<Wrapper>
				<Icon name='settings' cursor='pointer' rotate46={showSettings} onClick={this.handleShowSettings} sm />
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
										<Header handleShowQuotes={this.handleShowQuotes} />
									</GridTile>
									<GridTile style={{ display: 'flex', justifyContent: 'flex-end', padding: 10, paddingRight: 12 }}>
										<RaisedButton
											label={
												intl.formatMessage(
													messages[`randomQuotes.containers.preferences.${showQuotes ? 'quotes' : 'photos'}`]
												)
											}
											icon={<ContentAdd />}
											onClick={() => this.handleOpenDialog(true)}
										/>
										{showQuotes ? (
											<AddQuote
												openDialog={openDialog}
												onRequestClose={this.handleOpenDialog}
												onAdd={this.handleAddQuote}
											/>
										) : (
											<AddBackground
												openDialog={openDialog}
												onRequestClose={this.handleOpenDialog}
												onAdd={this.handleAddBackground}
												progress={progress}
											/>
										)}
									</GridTile>
									<GridTile>
										<Content
											backgrounds={backgrounds}
											quotes={quotes}
											showQuotes={showQuotes}
											onDelete={showQuotes ? this.handleRemoveQuote : this.handleRemoveBackground}
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
	progress: PropTypes.number.isRequired,
	handleRemoveQuote: PropTypes.func.isRequired,
	handleRemoveBackground: PropTypes.func.isRequired,
	handleAddQuote: PropTypes.func.isRequired,
	handleAddBackground: PropTypes.func.isRequired,
	handleSetFile: PropTypes.func.isRequired,
	handleSendFile: PropTypes.func.isRequired,
	intl: intlShape
}

const mapStateToProps = state => ({
	authenticated: state.auth.authenticated,
	backgrounds: state.backgrounds.list,
	quotes: state.quotes.list,
	progress: state.storage.progress
})

const mapDispatchToProps = {
	handleRemoveQuote: QtsActions.removeQuote,
	handleRemoveBackground: BgsActions.removeBackground,
	handleAddQuote: QtsActions.addQuote,
	handleAddBackground: BgsActions.addBackground,
	handleSetFile: StogActions.setFile,
	handleSendFile: StogActions.sendFile
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Preferences))
