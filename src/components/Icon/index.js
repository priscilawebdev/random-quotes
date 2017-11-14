import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Img, Centered } from './styles'

const iconNames = [
	'garbage',
	'settings',
	'heart',
	'heart-empty',
	'add',
	'loading'
]

const cursorTypes = [
	'auto',
	'pointer',
	'default'
]

export const icons = iconNames.reduce((acc, curr) => ({
	...acc,
	[curr]: require(`../Icon/img/${curr}.svg`) // eslint-disable-line
}), {})

const Icon = ({
	name,
	sm,
	size,
	fitHeight = true,
	cursor = 'auto',
	onClick
} = {}) => {
	console.log(size)
	return (
		<Wrapper size={size} cursor={cursor} onClick={onClick}>
			<Centered sm={sm}>
				<Img url={icons[name]} fitHeight={fitHeight} alt={icons[name]} />
			</Centered>
		</Wrapper>
	)
}

Icon.propTypes = {
	name: PropTypes.oneOf(iconNames).isRequired,
	cursor: PropTypes.oneOf(cursorTypes),
	onClick: PropTypes.func,
	sm: PropTypes.bool,
	md: PropTypes.bool,
	lg: PropTypes.bool,
	rotate46: PropTypes.bool,
	fitHeight: PropTypes.bool,
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Icon
