import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from 'reducers/backgrounds'
import Wrapper from './indexStyles'

class Background extends Component {
	static propTypes = {
		background: PropTypes.object,
		handleUpdate: PropTypes.func.isRequired,
		children: PropTypes.node.isRequired,
		backgrounds: PropTypes.array.isRequired,
		date: PropTypes.string.isRequired
	}

	componentDidMount() {
		const { background } = this.props
		if (Object.keys(background).length === 0) {
			this.getBackground()
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.date !== this.props.date) {
			this.getBackground()
		}
	}

	getBackground() {
		const { backgrounds } = this.props
		const sortBackgrounds = backgrounds.sort((a, b) => a.vcount - b.vcount) // Sort backgrounds according to vcount (number of visualizations)
		const slicedBackgrounds = sortBackgrounds.slice(0, 5) // get the first 5 backgrounds
		const chosenBackground = slicedBackgrounds[Math.floor(Math.random() * slicedBackgrounds.length)] // return the randomly chosen background
		this.handleUpdateBackground({ ...chosenBackground, vcount: chosenBackground.vcount + 1 })
	}

	handleUpdateBackground(modifiedBackground) {
		const { handleUpdate } = this.props
		handleUpdate(modifiedBackground)
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

const mapStateToProps = state => ({
	background: state.backgrounds.background
})

const mapDispatchToProps = {
	handleUpdate: actions.updateBackground
}

export default connect(mapStateToProps, mapDispatchToProps)(Background)

