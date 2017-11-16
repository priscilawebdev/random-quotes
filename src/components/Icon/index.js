import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Img } from './styles'

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
	md,
	lg,
	customSize,
	fitHeight = true,
	rotate46 = false,
	cursor = 'auto',
	onClick
} = {}) => (
	<Wrapper {...{ sm, md, lg, cursor, customSize, rotate46, name }} onClick={onClick}>
		<Img url={icons[name]} fitHeight={fitHeight} alt={icons[name]} />
	</Wrapper>
)

Icon.propTypes = {
	name: PropTypes.oneOf(iconNames).isRequired,
	cursor: PropTypes.oneOf(cursorTypes),
	onClick: PropTypes.func,
	sm: PropTypes.bool,
	md: PropTypes.bool,
	lg: PropTypes.bool,
	rotate46: PropTypes.bool,
	fitHeight: PropTypes.bool,
	customSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Icon
