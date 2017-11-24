import React, { Component } from 'react'
import Greetings from 'components/Greetings'
import { Wrapper, H1, H2 } from './styles'

export default class Moment extends Component {
	state = { date: new Date() }

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
