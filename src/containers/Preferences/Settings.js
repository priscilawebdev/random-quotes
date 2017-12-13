import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Login from 'containers/Login'
import SubPanel from './SubPanel'
import { Wrapper, Panel } from './SettingsStyles'

class Settings extends Component {

	static propTypes = {
		authenticated: PropTypes.bool.isRequired,
		quotes: PropTypes.array.isRequired,
		backgrounds: PropTypes.array.isRequired,
		onClick: PropTypes.func.isRequired,
		user: PropTypes.object
	}

	constructor() {
		super()
		this.state = { openDialog: false }
		this.handleClickOutside = ::this.handleClickOutside
		this.handleOpenDialog = ::this.handleOpenDialog
	}

	componentWillMount() {
		document.addEventListener('click', this.handleClickOutside, false)
	}

	// TODO: need refactor
	componentDidUpdate(__, prevState) {
		console.log(prevState)
		!prevState.openDialog && this.state.openDialog ? (
			document.removeEventListener('click', this.handleClickOutside, false)
		) : (
			document.addEventListener('click', this.handleClickOutside, false)
		)
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, false)
	}

	handleOpenDialog() {
		this.setState({ openDialog: !this.state.openDialog })
	}

	handleClickOutside(e) {
		const { onClick } = this.props
		if (this.node.contains(e.target)) {
			return
		}
		onClick()
	}

	render() {
		const { authenticated, quotes, backgrounds, user } = this.props
		const { openDialog } = this.state
		return (
			<Wrapper innerRef={(node) => { this.node = node }}>
				<Panel authenticated={authenticated}>
					{
						authenticated && user ? (
							<SubPanel
								quotes={quotes}
								backgrounds={backgrounds}
								user={user}
								onOpenDialog={this.handleOpenDialog}
								openDialog={openDialog}
							/>
						) : (
							<Login />
						)
					}
				</Panel>
			</Wrapper>
		)
	}
}

const mapStateToProps = state => ({
	authenticated: state.auth.authenticated,
	user: state.auth.user
})

export default connect(mapStateToProps)(Settings)
