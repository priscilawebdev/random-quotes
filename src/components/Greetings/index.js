import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import messages from './messages'

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

const Greetings = ({ hour }) => getGreetings(hour)

Greetings.propTypes = {
	hour: PropTypes.number.isRequired
}

export default Greetings
