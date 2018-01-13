import React from 'react'
import { intlShape, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import messages from './messages'

const validate = (values) => {
	const errors = {}
	const form = values.form
	let requiredFields = ['email', 'password']

	if (form !== 'signIn') {
		requiredFields = ['firstName', 'lastName', 'confirmEmail', 'email', 'password']
	}

	requiredFields.forEach((field) => {
		if (!values[field]) {
			errors[field] = <FormattedMessage {...messages['randomQuotes.containers.signInOrSignUp.required']} />
		}
	})

	if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		const email = <FormattedMessage {...messages['randomQuotes.containers.signInOrSignUp.email']} />
		errors.email =
			<FormattedMessage {...messages['randomQuotes.containers.signInOrSignUp.invalid']} values={{ what: email }} />
	}

	if (values.confirmEmail && values.confirmEmail !== values.email) {
		const email = <FormattedMessage {...messages['randomQuotes.containers.signInOrSignUp.email']} />
		errors.confirmEmail =
			(<FormattedMessage
				{...messages['randomQuotes.containers.signInOrSignUp.doesntMatch']}
				values={{ what: email }}
			/>)
	}

	return errors
}

validate.propTypes = {
	password: PropTypes.string,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	email: PropTypes.string,
	confirmEmail: PropTypes.string,
	intl: intlShape
}

export default validate
