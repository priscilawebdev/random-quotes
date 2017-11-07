import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

const TxtField = ({ input, label, meta: { touched, error }, ...custom }) => (
	<TextField
		hintText={label}
		floatingLabelText={label}
		errorText={touched && error}
		{...input}
		{...custom}
	/>
)

TxtField.propTypes = {
	input: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	meta: PropTypes.object.isRequired
}

export default TxtField
