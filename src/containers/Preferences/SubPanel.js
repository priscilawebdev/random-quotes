import React, { Component } from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GridList, GridTile } from 'material-ui/GridList'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { Add as AddQuote } from 'containers/Quote/Add'
import { Add as AddBackground } from 'containers/Background/Add'
import { actions as QtsActions } from 'reducers/quotes'
import { actions as BgsActions } from 'reducers/backgrounds'
import Header from './Header'
import Content from './Content'
import messages from './messages'

class Preferences extends Component {

	static propTypes = {
		intl: intlShape,
		backgrounds: PropTypes.array.isRequired,
		quotes: PropTypes.array.isRequired,
		handleRemoveQuote: PropTypes.func.isRequired,
		handleRemoveBackground: PropTypes.func.isRequired,
		handleAddQuote: PropTypes.func.isRequired,
		handleAddBackground: PropTypes.func.isRequired
	}

	constructor() {
		super()
		this.state = { showQuotes: true, openDialog: false }
		this.handleRemoveData = ::this.handleRemoveData
		this.handleAddData = ::this.handleAddData
		this.handleOpenDialog = ::this.handleOpenDialog
		this.handleCloseDialog = ::this.handleCloseDialog
	}

	handleOpenDialog() {
		this.setState({ openDialog: true })
	}

	handleCloseDialog() {
		this.setState({ openDialog: false })
	}

	handleRemoveData(id) {
		const { handleRemoveQuote, handleRemoveBackground } = this.props
		const { showQuotes } = this.state
		showQuotes ? handleRemoveQuote(id) : handleRemoveBackground(id)
	}

	handleAddData(values) {
		const { handleAddQuote, handleAddBackground } = this.props
		const { showQuotes } = this.state
		showQuotes ? handleAddQuote(values) : handleAddBackground(values)
	}

	render() {
		const { intl, quotes, backgrounds } = this.props
		const { showQuotes, openDialog } = this.state
		return (
			<GridList
				style={{ flexDirection: 'column', margin: 0 }}
				padding={0}
				cols={1}
				cellHeight='auto'
			>
				<GridTile>
					<Header handleShowQuotes={() => this.setState({ showQuotes: !showQuotes })} />
				</GridTile>
				<GridTile style={{ display: 'flex', justifyContent: 'flex-end', padding: 10, paddingRight: 12 }}>
					<RaisedButton
						label={
							intl.formatMessage(
								messages[`randomQuotes.containers.preferences.${showQuotes ? 'quotes' : 'photos'}`]
							)
						}
						icon={<ContentAdd />}
						onClick={() => this.handleOpenDialog()}
					/>
					{showQuotes ? (
						<AddQuote
							openDialog={openDialog}
							onRequestClose={this.handleCloseDialog}
							onAdd={this.handleAddData}
						/>
					) : (
						<AddBackground
							openDialog={openDialog}
							onRequestClose={this.handleCloseDialog}
							onAdd={this.handleAddData}
						/>
					)}
				</GridTile>
				<GridTile>
					<Content
						backgrounds={backgrounds}
						quotes={quotes}
						showQuotes={showQuotes}
						onDelete={this.handleRemoveData}
					/>
				</GridTile>
			</GridList>
		)
	}
}

const mapDispatchToProps = {
	handleRemoveQuote: QtsActions.removeQuote,
	handleRemoveBackground: BgsActions.removeBackground,
	handleAddQuote: QtsActions.addQuote,
	handleAddBackground: BgsActions.addBackground
}

export default connect(null, mapDispatchToProps)(injectIntl(Preferences))
