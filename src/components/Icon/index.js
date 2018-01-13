import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './indexStyles'

const iconNames = [
	'garbage',
	'settings',
	'heart',
	'heart-empty',
	'add',
	'loading',
	'image',
	'edit'
]

export const icons = iconNames.reduce((acc, curr) => ({
	...acc,
	[curr]: require(`../Icon/img/${curr}.svg`) // eslint-disable-line
}), {})

const cursors = {
	default: 'default',
	pointer: 'pointer'
}

const Icon = ({
	className = '',
	name,
	sm,
	md,
	lg,
	customSize,
	rotate45 = false,
	onClick,
	cursor
} = {}) => (
	<Wrapper
		className={className}
		onClick={onClick}
		cursor={cursors[cursor]}
		{...{ sm, md, lg, customSize, rotate45, name }}
	>
		<img src={icons[name]} alt={icons[name]} height='100%' width='100%' />
	</Wrapper>
)

Icon.propTypes = {
	className: PropTypes.string,
	name: PropTypes.oneOf(iconNames).isRequired,
	cursor: PropTypes.string,
	onClick: PropTypes.func,
	sm: PropTypes.bool,
	md: PropTypes.bool,
	lg: PropTypes.bool,
	rotate45: PropTypes.bool,
	customSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Icon
