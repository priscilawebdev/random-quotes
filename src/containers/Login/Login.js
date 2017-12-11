import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { actions } from 'reducers/auth'
import TextInput from 'components/TextInput'
import Button from 'components/Button'
import PasswordInput from 'components/PasswordInput'
import messages from './messages'
import validate from './validate'
import { Form, Title, Wrapper } from './styles'

class Login extends Component {

	static propTypes = {
		doLogin: PropTypes.func.isRequired,
		handleSubmit: PropTypes.func.isRequired,
		submitting: PropTypes.bool.isRequired,
		intl: intlShape
	}

	constructor() {
		super()
		this.handleLogin = ::this.handleLogin
	}

	handleLogin(values) {
		const { doLogin } = this.props
		doLogin(values)
	}

	render() {
		const { handleSubmit, submitting, intl } = this.props
		return (
			<Wrapper>
				<Title>{intl.formatMessage(messages['randomQuotes.containers.login'])}</Title>
				<Form onSubmit={handleSubmit(this.handleLogin)}>
					<Field
						name='email'
						type='email'
						component={TextInput}
						label={intl.formatMessage(messages['randomQuotes.containers.login.email'])}
						fullWidth
					/>
					<PasswordInput />
					<Button
						type='submit'
						label={intl.formatMessage(messages['randomQuotes.containers.login'])}
						disabled={submitting}
						primary
						fullWidth
					/>
				</Form>
			</Wrapper>
		)
	}
}

const mapDispatchToProps = {
	doLogin: actions.login
}

const renderLogin = reduxForm({
	form: 'Login',
	validate
})(Login)

export default connect(null, mapDispatchToProps)(injectIntl(renderLogin))
