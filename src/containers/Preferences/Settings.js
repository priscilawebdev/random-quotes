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
		onClick: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props)
		this.handleClickOutside = ::this.handleClickOutside
	}

	componentWillMount() {
		document.addEventListener('click', this.handleClickOutside, false)
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, false)
	}

	handleClickOutside(e) {
		const { onClick } = this.props
		if (this.node.contains(e.target)) {
			return
		}
		onClick()
	}

	render() {
		const { authenticated, quotes, backgrounds } = this.props
		return (
			<Wrapper innerRef={(node) => { this.node = node }}>
				<Panel authenticated={authenticated}>
					{
						authenticated ? (
							<SubPanel quotes={quotes} backgrounds={backgrounds} />
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
	authenticated: state.auth.authenticated
})

export default connect(mapStateToProps)(Settings)
