import React, { Component } from 'react'
import { intlShape, injectIntl } from 'react-intl'
import { Field } from 'redux-form'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'
import TextInput from 'components/TextInput'
import messages from './messages'
import { PasswordWrapper, CheckBoxField } from './indexStyles'

class PasswordInput extends Component {

	static propTypes = {
		intl: intlShape
	}

	constructor() {
		super()
		this.handleSetShowPassword = ::this.handleSetShowPassword
		this.state = { showPassword: false }
	}

	handleSetShowPassword() {
		this.setState({ showPassword: !this.state.showPassword })
	}

	render() {
		const { intl } = this.props
		const { showPassword } = this.state
		return (
			<PasswordWrapper>
				<Field
					name='password'
					component={TextInput}
					type={showPassword ? 'text' : 'password'}
					label={intl.formatMessage(messages['randomQuotes.components.passwordInput.password'])}
					fullWidth
				/>
				<CheckBoxField
					name='show'
					type='checkbox'
					onCheck={this.handleSetShowPassword}
					iconStyle={{ fill: 'rgba(0, 0, 0, 0.22)', marginRight: 0 }}
					checkedIcon={<Visibility />}
					uncheckedIcon={<VisibilityOff />}
				/>
			</PasswordWrapper>
		)
	}
}

export default injectIntl(PasswordInput)
