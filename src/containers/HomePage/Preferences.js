import React, { Component } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import Icon from 'components/Icon'

const Settings = glamorous.div({
	position: 'absolute',
	right: 0,
	maxWidth: 'none',
	height: 450,
	width: 700,
	margin: 0,
	padding: 0,
	left: 4,
	bottom: 52,
	zIndex: 1000000,
	borderRadius: 7,
}, ({ opacity }) => ({
	opacity: opacity ? 1 : 0
}))

const Panel = glamorous.div({
	background: '#0F0F0F',
	opacity: '0.925',
	height: '100%',
	borderRadius: 3,
	':before': {
		content: `''`, // eslint-disable-line
		height: 0,
		width: 0,
		position: 'absolute',
		borderLeft: '7px solid transparent',
		borderRight: '7px solid transparent',
		bottom: -6,
		borderTop: '6px solid rgba(15,15,15,.925)',
		left: 16
	}
})

const IconContainer = glamorous.div({
	padding: '0 15px 0 17px',
	transition: 'transform .1s ease-in-out'
}, ({ rotate }) => ({
	transform: rotate ? 'rotate(38deg) scale(1.1)' : 'none'
}))

class Preferences extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showSettings: false
		}
		this.setShowSettings = ::this.setShowSettings
	}

	setShowSettings() {
		this.setState({
			showSettings: !this.state.showSettings
		})
	}

	render() {
		const { showSettings } = this.state
		return (
			<div>
				<IconContainer rotate={showSettings}>
					<Icon opacity='.5' name='settings' size={20} onClick={this.setShowSettings} />
				</IconContainer>
				<Settings opacity={showSettings}>
					<Panel>Work in Progress</Panel>
				</Settings>
			</div>
		)
	}
}

Preferences.propTypes = {
	quotes: PropTypes.array.isRequired,
	backgrounds: PropTypes.array.isRequired
}

export default Preferences
