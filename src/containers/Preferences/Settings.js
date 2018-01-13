import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GridTile } from 'material-ui/GridList'
import SignInOrSignUp from 'containers/SignInOrSignUp'
import Spinner from 'components/Spinner'
import { actions as QtsActions } from 'reducers/quotes'
import { actions as BgsActions } from 'reducers/backgrounds'
import { actions as AuthActions } from 'reducers/auth'
import { Wrapper, Panel, Grid } from './SettingsStyles'
import Menu from './Menu'
import Header from './Header'
import Content from './Content'

// TODO Refactor event listeners
class Settings extends Component {
	static propTypes = {
		user: PropTypes.object,
		authenticated: PropTypes.bool.isRequired,
		showDialog: PropTypes.bool.isRequired,
		category: PropTypes.string.isRequired,
		loading: PropTypes.bool.isRequired,
		displayName: PropTypes.string,
		quotes: PropTypes.array.isRequired,
		backgrounds: PropTypes.array.isRequired,
		onSetShowSettings: PropTypes.func.isRequired,
		onSetShowDialog: PropTypes.func.isRequired,
		handleRemoveQuote: PropTypes.func.isRequired,
		handleRemoveBackground: PropTypes.func.isRequired,
		handleAddBackground: PropTypes.func.isRequired,
		handleAddQuote: PropTypes.func.isRequired,
		handleSignOut: PropTypes.func.isRequired
	}

	constructor() {
		super()
		this.handleClickOutside = ::this.handleClickOutside
		this.handleSignOut = ::this.handleSignOut
		this.handleRemoveData = ::this.handleRemoveData
		this.handleAddData = ::this.handleAddData
		this.getContent = ::this.getContent
	}

	componentWillMount() {
		document.addEventListener('click', this.handleClickOutside, false)
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.showDialog && this.props.showDialog) {
			document.removeEventListener('click', this.handleClickOutside, false)
		} else {
			document.addEventListener('click', this.handleClickOutside, false)
		}
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, false)
	}

	getContent() {
		const { category, user, quotes, backgrounds } = this.props
		const filterCategory = category === 'quotes' ? quotes : backgrounds
		return filterCategory.filter(item => item.creator === user.uid)
	}

	handleAddData(values) {
		const { handleAddQuote, handleAddBackground, category, onSetShowDialog } = this.props
		category === 'quotes' ? handleAddQuote(values) : handleAddBackground(values)
		onSetShowDialog()
	}

	handleSignOut() {
		const { handleSignOut } = this.props
		document.removeEventListener('click', this.handleClickOutside, false)
		handleSignOut()
	}

	handleRemoveData(id) {
		const { handleRemoveQuote, handleRemoveBackground, category } = this.props
		document.removeEventListener('click', this.handleClickOutside, false)
		category === 'quotes' ? handleRemoveQuote(id) : handleRemoveBackground(id)
	}

	handleClickOutside(e) {
		// ignore clicks on the component itself
		const { onSetShowSettings } = this.props
		if (this.node.contains(e.target)) {
			return
		}
		onSetShowSettings()
	}

	render() {
		const { authenticated, user, category, loading, displayName } = this.props
		return (
			<Wrapper innerRef={(node) => { this.node = node }}>
				<Panel authenticated={authenticated}>
					{authenticated && user ? (
						<Grid cols={8} cellHeight='auto' noMargin>
							<GridTile cols={2}>
								<Menu {...this.props} />
							</GridTile>
							<GridTile cols={6}>
								{loading ? (
									<Spinner />
								) : (
									<Grid cols={1} padding={16} cellHeight='auto' overflowY='auto' multiline={false}>
										<GridTile>
											<Header
												user={user}
												displayName={displayName}
												category={category}
												onLogout={this.handleSignOut}
												onAdd={this.handleAddData}
												{...this.props}
											/>
										</GridTile>
										<GridTile>
											{category !== 'general' ? (
												<Content
													category={category}
													onRemove={this.handleRemoveData}
													content={this.getContent()}
													{...this.props}
												/>
											) : null}
										</GridTile>
									</Grid>
								)}
							</GridTile>
						</Grid>
					) : (
						<SignInOrSignUp />
					)}
				</Panel>
			</Wrapper>
		)
	}
}

const mapStateToProps = state => ({
	authenticated: state.auth.authenticated,
	loading: state.signUp.registering,
	user: state.auth.user,
	displayName: state.auth.user && (state.auth.user.displayName || state.signUp.displayName)
})

const mapDispatchToProps = {
	handleRemoveQuote: QtsActions.removeQuote,
	handleRemoveBackground: BgsActions.removeBackground,
	handleAddQuote: QtsActions.addQuote,
	handleAddBackground: BgsActions.addBackground,
	handleSignOut: AuthActions.signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
