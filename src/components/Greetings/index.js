import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import messages from './messages'

const getGreetings = (currentHour) => {
	let greetings
	if (currentHour >= 0 && currentHour < 12) {
		greetings = <FormattedMessage {...messages['randomQuotes.components.greetings.morning']} />
	} else if (currentHour >= 12 && currentHour < 17) {
		greetings = <FormattedMessage {...messages['randomQuotes.components.greetings.afternoon']} />
	} else {
		greetings = <FormattedMessage {...messages['randomQuotes.components.greetings.evening']} />
	}
	return (
		<FormattedMessage {...messages['randomQuotes.components.greetings']} values={{ moment: greetings }} />
	)
}

const Greetings = ({ hour }) => getGreetings(hour)

Greetings.propTypes = {
	hour: PropTypes.number.isRequired
}

export default Greetings
