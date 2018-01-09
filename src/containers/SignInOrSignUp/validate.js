import React from 'react'
import { intlShape, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import messages from './messages'

const validate = (values) => {
	const errors = {}
	const requiredFields = ['email', 'password']
	requiredFields.forEach((field) => {
		if (!values[field]) {
			errors[field] = <FormattedMessage {...messages['randomQuotes.containers.signIn.required']} />
		}
	})
	if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		const email = <FormattedMessage {...messages['randomQuotes.containers.signIn.email']} />
		errors.email =
			<FormattedMessage {...messages['randomQuotes.containers.signIn.invalid']} values={{ what: email }} />
	}
	return errors
}

validate.propTypes = {
	username: PropTypes.string,
	password: PropTypes.string,
	intl: intlShape
}

export default validate