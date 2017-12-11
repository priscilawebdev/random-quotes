import React, { Component } from 'react'
import Icon from 'components/Icon'
import Settings from './Settings'
import Wrapper from './indexStyles'

class Preferences extends Component {

	constructor() {
		super()
		this.handleClick = ::this.handleClick
		this.state = { showSettings: false }
	}

	handleClick() {
		this.setState({ showSettings: !this.state.showSettings })
	}

	render() {
		const { showSettings } = this.state
		return (
			<Wrapper>
				<Icon name='settings' rotate45={showSettings} onClick={this.handleClick} sm />
				{ showSettings && (
					<Settings {...this.props} onClick={this.handleClick} />
				)}
			</Wrapper>
		)
	}
}

export default Preferences
