import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import imgHeart from './img/icon-heart.svg'
import imgHeartEmpty from './img/icon-heart-empty.svg'

const Heart = glamorous.span({
	height: '15',
	width: '14',
	display: 'inline-block',
	position: 'absolute',
	cursor: 'pointer'
}, ({ full = false, margin = 0, top = 4 }) => ({
	backgroundImage: `url(${full ? imgHeart : imgHeartEmpty})`,
	margin,
	top
}))

Heart.propTypes = {
	full: PropTypes.bool.isRequired
}


export default Heart
