import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Error, HR, Button, Progress, Input } from './styles'

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
		const { label, accept, progress, input: { value }, meta: { error } } = this.props
		return (
			<div style={{ marginTop: 20 }}>
				<Button
					label={label}
					labelPosition='before'
					containerElement='label'
					fullWidth
				>
					<Progress id='TESTE' progress={progress} />
					<Input type='file' accept={accept} onChange={this.onChange} />
				</Button>
				{value && error && (
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
	progress: PropTypes.number.isRequired,
	accept: PropTypes.string,
	label: PropTypes.string
}

export default FileField
