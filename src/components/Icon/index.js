import React from 'react'
import PropTypes from 'prop-types'

import Span from './Span'
import Wrapper from './Wrapper'
import Centered from './Centered'
import Img from './Img'

const iconNames = [
	'settings',
	'heart-empty',
	'heart-full',
	'loading'
]

export const icons = iconNames.reduce((acc, curr) => ({
	...acc,
	[curr]: require(`./img/${curr}.svg`), // eslint-disable-line
}), {})

const Icon = ({
	name,
	xxsm,
	xsm,
	sm,
	md,
	lg,
	size,
	fitHeight,
	opacity,
	onClick
} = {}) => {
	const styles = size ? { width: size, height: size } : null
	return (
		<Span style={styles} onClick={onClick} role='presentation'>
			<Wrapper>
				<Centered {...{ xxsm, xsm, sm, md, lg }}>
					<Img fitHeight={fitHeight} src={icons[name]} alt={name} opacity={opacity} />
				</Centered>
			</Wrapper>
		</Span>
	)
}

Icon.propTypes = {
	name: PropTypes.oneOf(iconNames).isRequired,
	sm: PropTypes.bool,
	md: PropTypes.bool,
	lg: PropTypes.bool,
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	onClick: PropTypes.func,
	opacity: PropTypes.string
}

export default Icon
