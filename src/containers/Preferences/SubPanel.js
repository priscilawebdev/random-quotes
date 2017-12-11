import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GridTile } from 'material-ui/GridList'
import { actions as QtsActions } from 'reducers/quotes'
import { actions as BgsActions } from 'reducers/backgrounds'
import Menu from './Menu'
import Header from './Header'
import Content from './Content'
import Grid from './SubPanelStyles'

class Preferences extends Component {

	static propTypes = {
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
		this.handleShowQuotes = ::this.handleShowQuotes
		this.handleShowPhotos = ::this.handleShowPhotos
	}

	handleOpenDialog() { this.setState({ openDialog: true }) }

	handleCloseDialog() { this.setState({ openDialog: false }) }

	handleShowQuotes() { this.setState({ showQuotes: true }) }

	handleShowPhotos() { this.setState({ showQuotes: false }) }

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
		const { quotes, backgrounds } = this.props
		const { showQuotes } = this.state
		return (
			<Grid cols={8} cellHeight='auto' noMargin>
				<GridTile cols={2}>
					<Menu onShowQuotes={this.handleShowQuotes} onShowPhotos={this.handleShowPhotos} />
				</GridTile>
				<GridTile cols={6}>
					<Grid cols={1} padding={16} cellHeight='auto' overflowY='auto' multiline={false}>
						<GridTile>
							<Header showQuotes={showQuotes} />
						</GridTile>
						<GridTile>
							<Content
								showQuotes={showQuotes}
								onDelete={this.handleRemoveData}
								backgrounds={backgrounds}
								quotes={quotes}
							/>
						</GridTile>
					</Grid>
				</GridTile>
			</Grid>
		)
	}
}

const mapDispatchToProps = {
	handleRemoveQuote: QtsActions.removeQuote,
	handleRemoveBackground: BgsActions.removeBackground,
	handleAddQuote: QtsActions.addQuote,
	handleAddBackground: BgsActions.addBackground
}

export default connect(null, mapDispatchToProps)(Preferences)
