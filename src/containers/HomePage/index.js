import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions } from 'ducks/app'
import Greetings from 'components/Greetings'
import Quote from 'containers/Quote'
import Preferences from 'containers/Preferences'
import Background from 'containers/Background'
import { H1, H2, Moment } from './styles'

class HomePage extends Component {
	constructor() {
		super()
		this.state = { date: new Date() }
	}

	componentDidMount() {
		const { handleLoadData } = this.props
		handleLoadData()
		this.intervalID = setInterval(
			() => this.tick(),
			1000
		)
	}

	componentWillUnmount() {
		clearInterval(this.intervalID)
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}

	leadingZero(value) {
		return value.toString().replace(/^([0-9])$/, '0$1')
	}

	render() {
		const { backgrounds, quotes } = this.props
		const { date } = this.state
		return (
			backgrounds && quotes && (
				<Background backgrounds={backgrounds} hours={date.getHours()}>
					<Moment>
						<H1>{`${this.leadingZero(date.getHours())}:${this.leadingZero(date.getMinutes())}`}</H1>
						<H2><Greetings hour={date.getHours()} /></H2>
					</Moment>
					<Preferences backgrounds={backgrounds} quotes={quotes} />
					<Quote quotes={quotes} hours={date.getHours()} />
				</Background>
			)
		)
	}
}


HomePage.propTypes = {
	backgrounds: PropTypes.array,
	quotes: PropTypes.array,
	handleLoadData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	...state.app.data
})

const mapDispatchToProps = {
	handleLoadData: actions.loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

