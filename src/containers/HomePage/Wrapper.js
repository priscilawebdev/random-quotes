import React, { Component } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import { connect } from 'react-redux'

import { actions } from 'ducks/app'

const Background = glamorous.div({
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column'
}, props => ({
	backgroundImage: props.background ? `url(${props.background.url})` : 'none'
}))

class Wrapper extends Component {

	componentDidMount() {
		this.getBackground()
	}

	getBackground() {
		const { backgrounds, background } = this.props
		 if (!background) {
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
			<Background background={background}>
				{ children }
			</Background>
		)
	}
}

Wrapper.propTypes = {
	handleUpdateBackground: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	backgrounds: PropTypes.array.isRequired,
	background: PropTypes.object
}

const mapStateToProps = state => ({
	background: state.app.background
})

const mapDispatchToProps = {
	handleUpdateBackground: actions.updateBackground
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)

