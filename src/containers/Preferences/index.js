import React, { Component } from 'react'
import Icon from 'components/Icon'
import Settings from './Settings'
import Wrapper from './indexStyles'

class Preferences extends Component {
	constructor() {
		super()
		this.state = { showSettings: false, showDialog: false, category: 'general' }
		this.handleSetShowSettings = ::this.handleSetShowSettings
		this.handleSetCategory = ::this.handleSetCategory
		this.handleSetShowDialog = ::this.handleSetShowDialog
		this.handleCloseShowDialog = ::this.handleCloseShowDialog
	}

	handleSetShowSettings() {
		this.setState({ showSettings: !this.state.showSettings })
	}

	handleSetCategory(what) {
		this.setState({ category: what })
	}

	handleSetShowDialog() {
		this.setState({ showDialog: !this.state.showDialog })
	}

	handleCloseShowDialog() {
		this.setState({ showDialog: false })
	}

	render() {
		const { showSettings, showDialog, category } = this.state
		return (
			<Wrapper>
				<Icon name='settings' cursor='pointer' rotate45={showSettings} onClick={this.handleSetShowSettings} sm />
				{showSettings && (
					<Settings
						showSettings={showSettings}
						showDialog={showDialog}
						category={category}
						onSetShowDialog={this.handleSetShowDialog}
						onSetCategory={this.handleSetCategory}
						onCloseDialog={this.handleCloseShowDialog}
						onSetShowSettings={this.handleSetShowSettings}
						{...this.props}
					/>
				)}
			</Wrapper>
		)
	}
}

export default Preferences
