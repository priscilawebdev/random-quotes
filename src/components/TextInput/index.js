import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './indexStyles'

const TextInput = ({ input, label, meta: { touched, error }, ...custom }) => (
	<Wrapper
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
