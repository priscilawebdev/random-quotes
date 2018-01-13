import React from 'react'
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
import { Form, Title } from './styles'

const SignIn = ({ intl, handleSubmit, signIn, submitting }) => (
	<div>
		<Title>{intl.formatMessage(messages['randomQuotes.containers.signInOrSignUp.signIn'])}</Title>
		<Form onSubmit={handleSubmit(signIn)} autoComplete='off'>
			<Field
				name='form'
				type='hidden'
				component={TextInput}
			/>
			<Field
				name='email'
				type='email'
				component={TextInput}
				label={intl.formatMessage(messages['randomQuotes.containers.signInOrSignUp.email'])}
				fullWidth
			/>
			<PasswordInput />
			<Button
				type='submit'
				label={intl.formatMessage(messages['randomQuotes.containers.signInOrSignUp.signIn'])}
				disabled={submitting}
				primary
				fullWidth
			/>
		</Form>
	</div>
)

SignIn.propTypes = {
	signIn: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	submitting: PropTypes.bool.isRequired,
	intl: intlShape
}

const mapDispatchToProps = {
	signIn: actions.signIn
}

const renderSignIn = reduxForm({
	form: 'signIn',
	initialValues: {
		form: 'signIn'
	},
	validate
})(SignIn)

export default connect(null, mapDispatchToProps)(injectIntl(renderSignIn))
