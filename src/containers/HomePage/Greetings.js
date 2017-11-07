import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'

import { mediaQueries } from '../../style-utils'
import messages from './messages'

const H2 = glamorous.h2({
	fontFamily: 'Roboto',
	textAlign: 'center',
	lineHeight: 1,
	padding: 0,
	margin: 0,
	color: '#fff',
	fontSize: '3em',
	fontWeight: 500,
	textTransform: 'lowercase',
	':first-letter': {
		textTransform: 'uppercase'
	},
	[mediaQueries.tablet]: {
		fontSize: '4.5em'
	}
})

const getGreetings = (currentHour) => {
	let greetings

	if (currentHour >= 0 && currentHour < 12) {
		greetings = messages.morning
	} else if (currentHour >= 12 && currentHour < 17) {
		greetings = messages.afternoon
	} else {
		greetings = messages.evening
	}

	return <FormattedMessage {...messages.greetings} values={{ moment: greetings.defaultMessage }} />
}

class Greetings extends PureComponent {
	render() {
		return (
			<H2>{getGreetings(this.props.hour)}</H2>
		)
	}
}

Greetings.propTypes = {
	hour: PropTypes.number.isRequired
}

export default Greetings
