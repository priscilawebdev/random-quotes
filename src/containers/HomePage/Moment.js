import React from 'react'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'

import { mediaQueries } from '../../style-utils'

const Div = glamorous.div({
	flex: '1 0 auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
})


const H1 = glamorous.h1({
	fontFamily: 'Roboto',
	textAlign: 'center',
	lineHeight: 1,
	padding: 0,
	margin: 0,
	color: '#fff',
	fontSize: '5em',
	fontWeight: 500,
	marginBottom: 20,
	[mediaQueries.tablet]: {
		fontSize: '7.5em'
	}
})

const Moment = ({ dateTime, children }) => (
	<Div>
		<H1>{dateTime}</H1>
		{children}
	</Div>
)

Moment.propTypes = {
	children: PropTypes.node,
	dateTime: PropTypes.string.isRequired
}

export default Moment
