import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import { Field } from 'redux-form'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'
import TextInput from 'components/TextInput'
import messages from './messages'
import { PasswordWrapper, CheckBoxField } from './indexStyles'

class PasswordInput extends Component {
	static propTypes = {
		intl: intlShape,
		style: PropTypes.object
	}

	constructor() {
		super()
		this.handleSetShowPassword = ::this.handleSetShowPassword
		this.state = { showPassword: false, newVal: undefined }
	}

	handleSetShowPassword() {
		this.setState({ showPassword: !this.state.showPassword })
	}

	render() {
		const { intl, style } = this.props
		const { showPassword } = this.state
		return (
			<PasswordWrapper>
				<Field
					name='password'
					component={TextInput}
					type={showPassword ? 'text' : 'password'}
					label={intl.formatMessage(messages['randomQuotes.components.passwordInput.password'])}
					style={style}
					fullWidth
				/>
				<CheckBoxField
					name='show'
					type='checkbox'
					onCheck={this.handleSetShowPassword}
					checkedIcon={<Visibility />}
					uncheckedIcon={<VisibilityOff />}
				/>
			</PasswordWrapper>
		)
	}
}

export default injectIntl(PasswordInput)
