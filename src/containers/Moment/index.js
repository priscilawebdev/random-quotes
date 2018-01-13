import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from 'reducers/app'
import Greetings from 'components/Greetings'
import { Wrapper, H1, H2 } from './indexStyles'

class Moment extends Component {
	static propTypes = {
		handleUpdateDate: PropTypes.func.isRequired,
		date: PropTypes.string.isRequired
	}

	constructor() {
		super()
		this.state = { date: new Date() }
	}

	componentDidMount() {
		const date = new Intl.DateTimeFormat().format(this.state.date)
		if (date !== this.props.date) {
			this.handleUpdateDate(date)
		}

		this.intervalID = setInterval(
			() => this.tick(),
			1000
		)
	}

	componentDidUpdate(__, prevState) {
		const date = new Intl.DateTimeFormat().format(prevState.date)
		if (date !== this.props.date) {
			this.handleUpdateDate(date)
		}
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

	handleUpdateDate(newDate) {
		const { handleUpdateDate } = this.props
		handleUpdateDate(newDate)
	}

	render() {
		const { date } = this.state
		return (
			<Wrapper>
				<H1>{`${this.leadingZero(date.getHours())}:${this.leadingZero(date.getMinutes())}`}</H1>
				<H2><Greetings hour={date.getHours()} /></H2>
			</Wrapper>
		)
	}
}

const mapDispatchToProps = {
	handleUpdateDate: actions.updateDate
}

export default connect(null, mapDispatchToProps)(Moment)
