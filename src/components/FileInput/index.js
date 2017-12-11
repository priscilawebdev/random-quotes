import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Error, HR, Button, Input } from './indexStyles'

class FileField extends Component {
	constructor(props) {
		super(props)
		this.onChange = ::this.onChange
		this.state = { imagePreviewUrl: '' }
	}

	onChange = (e) => {
		const { input: { onChange } } = this.props
		onChange(e.target.files[0])
	}

	render() {
		const { label, accept, input: { value }, meta: { touched, error } } = this.props
		return (
			<div style={{ marginTop: 20 }}>
				<Button
					label={value.name || label}
					labelPosition='before'
					containerElement='label'
					fullWidth
				>
					<Input type='file' accept={accept} onChange={this.onChange} />
				</Button>
				{touched && error && (
					<Error>
						<HR />
						{error}
					</Error>
				)}
			</div>
		)
	}
}


FileField.propTypes = {
	input: PropTypes.object.isRequired,
	meta: PropTypes.object.isRequired,
	accept: PropTypes.string,
	label: PropTypes.string
}

export default FileField
