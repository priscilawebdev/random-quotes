import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Table, TableCell } from './indexStyles'

const iconNames = [
	'garbage',
	'settings',
	'heart',
	'heart-empty',
	'add',
	'loading',
	'image'
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
	rotate45 = false,
	onClick
} = {}) => (
	<Wrapper onClick={onClick}>
		<Table>
			<TableCell {...{ sm, md, lg, customSize, rotate45, name }}>
				<img src={icons[name]} alt={icons[name]} />
			</TableCell>
		</Table>
	</Wrapper>
)

Icon.propTypes = {
	name: PropTypes.oneOf(iconNames).isRequired,
	onClick: PropTypes.func,
	sm: PropTypes.bool,
	md: PropTypes.bool,
	lg: PropTypes.bool,
	rotate45: PropTypes.bool,
	customSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Icon
