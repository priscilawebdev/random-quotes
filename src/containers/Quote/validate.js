import React from 'react'
import { intlShape, FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import messages from './messages'

const validate = (values) => {
	const errors = {}
	const requiredFields = ['description', 'author']
	requiredFields.forEach((field) => {
		if (!values[field]) {
			errors[field] = <FormattedMessage {...messages['randomQuotes.containers.quote.required']} />
		}
	})
	return errors
}

validate.propTypes = {
	description: PropTypes.string,
	author: PropTypes.string,
	intl: intlShape
}

export default validate
