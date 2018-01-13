import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Heading, SubHeading } from './indexStyles'

const EmptyState = ({ heading = '', subheading = '', body }) => (
	<Wrapper>
		<Heading>{heading}</Heading>
		<SubHeading>{subheading}</SubHeading>
		{body}
	</Wrapper>
)

EmptyState.propTypes = {
	heading: PropTypes.any,
	subheading: PropTypes.any,
	body: PropTypes.any
}

export default EmptyState
