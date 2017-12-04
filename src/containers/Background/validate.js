import React from 'react'
import { intlShape, FormattedMessage } from 'react-intl'
import urlRegex from 'url-regex'
import PropTypes from 'prop-types'
import messages from './messages'


const validate = (values) => {
	const errors = {}
	const requiredFields = ['file', 'by', 'from']
	const requiredValidUrl = ['link']
	if (values.file) {
		if (values.file.type !== 'image/jpg' && values.file.type !== 'image/png' && values.file.type !== 'image/jpeg') {
			errors.file = <FormattedMessage {...messages['randomQuotes.containers.background.invalidFileFormat']} />
		}
	}
	requiredValidUrl.forEach((field) => {
		if (values[field] && !urlRegex().test(values[field])) {
			errors[field] = <FormattedMessage {...messages['randomQuotes.containers.background.invalidURL']} />
		}
	})
	requiredFields.forEach((field) => {
		if (!values[field]) {
			errors[field] = <FormattedMessage {...messages['randomQuotes.containers.background.required']} />
		}
	})
	return errors
}

validate.propTypes = {
	file: PropTypes.object,
	from: PropTypes.string,
	by: PropTypes.string,
	intl: intlShape
}

export default validate
