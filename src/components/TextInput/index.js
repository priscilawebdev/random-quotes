import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

const TextInput = ({ input, label, meta: { touched, error }, ...custom }) => (
	<TextField
		hintText={label}
		floatingLabelText={label}
		errorText={touched && error}
		{...input}
		{...custom}
	/>
)

TextInput.propTypes = {
	input: PropTypes.object.isRequired,
	meta: PropTypes.object.isRequired,
	label: PropTypes.string
}

export default TextInput
