import React from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { actions } from 'reducers/signUp'
import TextInput from 'components/TextInput'
import PasswordInput from 'components/PasswordInput'
import Button from 'components/Button'
import messages from './messages'
import validate from './validate'
import { Form, Title } from './styles'

// TODO Refactor autofill
const SignUp = ({ intl, handleSubmit, signUp, submitting }) => (
	<div>
		<Title>{intl.formatMessage(messages['randomQuotes.containers.signInOrSignUp.signUp'])}</Title>
		<Form onSubmit={handleSubmit(signUp)}>
			<Field
				name='form'
				type='hidden'
				component={TextInput}
			/>
			<Field
				name='firstName'
				component={TextInput}
				label={intl.formatMessage(messages['randomQuotes.containers.signInOrSignUp.firstName'])}
				fullWidth
			/>
			<Field
				name='lastName'
				component={TextInput}
				label={intl.formatMessage(messages['randomQuotes.containers.signInOrSignUp.lastName'])}
				fullWidth
			/>
			<Field
				name='email'
				type='email'
				component={TextInput}
				label={intl.formatMessage(messages['randomQuotes.containers.signInOrSignUp.email'])}
				fullWidth
			/>
			<Field
				name='confirmEmail'
				type='text'
				autoComplete='confirmEmail'
				component={TextInput}
				label={intl.formatMessage(messages['randomQuotes.containers.signInOrSignUp.confirmEmail'])}
				fullWidth
			/>
			<Field
				name='password'
				component={PasswordInput}
				label={intl.formatMessage(messages['randomQuotes.containers.signInOrSignUp.password'])}
				fullWidth
			/>
			<div style={{ display: 'none' }}>
				<Field
					name='confirmEmailHidden'
					component={TextInput}
				/>
				<Field
					name='passwordHidden'
					component={PasswordInput}
				/>
			</div>
			<Button
				type='submit'
				label={intl.formatMessage(messages['randomQuotes.containers.signInOrSignUp.signUp'])}
				disabled={submitting}
				primary
				fullWidth
			/>
		</Form>
	</div>
)

SignUp.propTypes = {
	signUp: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	submitting: PropTypes.bool.isRequired,
	intl: intlShape
}

const mapDispatchToProps = {
	signUp: actions.signUp
}

const renderSignUp = reduxForm({
	form: 'signUp',
	validate,
	initialValues: {
		form: 'signUp'
	},
	enableReinitialize: true
})(SignUp)

export default connect(null, mapDispatchToProps)(injectIntl(renderSignUp))
