import React, { Component } from 'react'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'

import { mediaQueries } from '../../style-utils'
import Greetings from './Greetings'

const Div = glamorous.div({
	flex: '1 0 auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
})


const H1 = glamorous.h1({
	fontFamily: 'Roboto',
	textAlign: 'center',
	lineHeight: 1,
	padding: 0,
	margin: 0,
	color: '#fff',
	fontSize: '5em',
	fontWeight: 500,
	marginBottom: 20,
	[mediaQueries.tablet]: {
		fontSize: '7.5em'
	}
})

class Moment extends Component {
	constructor(props) {
		super(props)
		this.state = { date: new Date() }
	}

	componentDidMount() {
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

	render({ greetings = true } = {}) {
		return (
			<Div>
				<H1>{`${this.leadingZero(this.state.date.getHours())}:${this.leadingZero(this.state.date.getMinutes())}`}</H1>
				{ greetings && (
					<Greetings hour={this.state.date.getHours()} />
				)}
			</Div>
		)
	}
}

Moment.propTypes = {
	greetings: PropTypes.bool
}

export default Moment
