import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions } from 'ducks/app'
import Grid from 'components/Grid'
import GridCell from 'components/GridCell'
import Moment from './Moment'
import Wrapper from './Wrapper'
import Quote from './Quote'
import Preferences from './Preferences'
import Greetings from './Greetings'

class HomePage extends Component {
	constructor(props) {
		super(props)
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
				<Wrapper backgrounds={backgrounds} hours={date.getMinutes()}>
					<Moment dateTime={`${this.leadingZero(date.getHours())}:${this.leadingZero(date.getMinutes())}`}>
						<Greetings hour={date.getHours()} />
					</Moment>
					<Grid align='bottom'>
						<GridCell alignSelf='middle'>
							<Preferences
								quotes={quotes}
								backgrounds={backgrounds}
								hours={date.getHours()}
							/>
						</GridCell>
						<GridCell justifySelf='center' alignSelf='middle'>
							<Quote quotes={quotes} hours={date.getHours()} />
						</GridCell>
					</Grid>
				</Wrapper>
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

