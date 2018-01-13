import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GridTile } from 'material-ui/GridList'
import { actions as QtsActions } from 'reducers/quotes'
import { actions as BgsActions } from 'reducers/backgrounds'
import { actions as AuthActions } from 'reducers/auth'
import Menu from './Menu'
import Header from './Header'
import Content from './Content'
import Grid from './SubPanelStyles'

class Preferences extends Component {
	static propTypes = {
		handleRemoveQuote: PropTypes.func.isRequired,
		handleRemoveBackground: PropTypes.func.isRequired,
		handleAddQuote: PropTypes.func.isRequired,
		handleAddBackground: PropTypes.func.isRequired,
		handleLogout: PropTypes.func.isRequired
	}

	constructor() {
		super()
		this.state = { show: 'general' }
		this.handleRemoveData = ::this.handleRemoveData
		this.handleAddData = ::this.handleAddData
		this.handleShow = ::this.handleShow
		this.handleLogout = ::this.handleLogout
	}

	handleShow(what) {
		this.setState({ show: what })
	}

	handleRemoveData(id) {
		const { handleRemoveQuote, handleRemoveBackground } = this.props
		const { show } = this.state
		show === 'quotes' ? handleRemoveQuote(id) : handleRemoveBackground(id)
	}

	handleAddData(values) {
		const { handleAddQuote, handleAddBackground } = this.props
		const { show } = this.state
		show === 'quotes' ? handleAddQuote(values) : handleAddBackground(values)
	}

	handleLogout() {
		const { handleLogout } = this.props
		handleLogout()
	}

	render() {
		const { show } = this.state
		return (
			<Grid cols={8} cellHeight='auto' noMargin>
				<GridTile cols={2}>
					<Menu onShow={this.handleShow} />
				</GridTile>
				<GridTile cols={6}>
					<Grid cols={1} padding={16} cellHeight='auto' overflowY='auto' multiline={false}>
						<GridTile>
							<Header
								show={show}
								onLogout={this.handleLogout}
								onAdd={this.handleAddData}
								{...this.props}
							/>
						</GridTile>
						<GridTile>
							{show !== 'general' ? (
								<Content
									show={show}
									onDelete={this.handleRemoveData}
									{...this.props}
								/>
							) : null}
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
	handleAddBackground: BgsActions.addBackground,
	handleLogout: AuthActions.logout
}

export default connect(null, mapDispatchToProps)(Preferences)
