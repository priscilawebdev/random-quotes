import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions } from 'ducks/app'
import Wrapper from './styles'

class Background extends Component {

	componentDidMount() {
		this.getBackground()
	}

	componentWillReceiveProps(newProps) {
		if (this.props.hours !== newProps.hours) {
			this.getBackground(newProps.hours)
		}
	}

	getBackground(hours) {
		const { backgrounds, background } = this.props
		if (!background || hours === 24) { // new day => new background
			const sortBackgrounds = backgrounds.sort((a, b) => a.vcount - b.vcount) // Sort backgrounds according to vcount (number of visualizations)
			const slicedBackgrounds = sortBackgrounds.slice(0, 5) // get the first 5 backgrounds
			const chosenBackground = slicedBackgrounds[Math.floor(Math.random() * slicedBackgrounds.length)] // return the randomly chosen background
			this.handleUpdateBackground({ ...chosenBackground, vcount: chosenBackground.vcount + 1 })
		}
	}

	handleUpdateBackground(changes) {
		const { handleUpdateBackground } = this.props
		handleUpdateBackground(changes)
	}

	render() {
		const { background, children } = this.props
		return (
			<Wrapper background={background}>
				{ children }
			</Wrapper>
		)
	}
}

Background.propTypes = {
	handleUpdateBackground: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	backgrounds: PropTypes.array.isRequired,
	hours: PropTypes.number.isRequired,
	background: PropTypes.object
}

const mapStateToProps = state => ({
	background: state.app.background
})

const mapDispatchToProps = {
	handleUpdateBackground: actions.updateBackground
}

export default connect(mapStateToProps, mapDispatchToProps)(Background)
