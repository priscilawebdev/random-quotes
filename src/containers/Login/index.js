import React, { Component } from 'react'
import { intlShape, injectIntl } from 'react-intl'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'

import { actions } from 'ducks/auth'
import TxtField from 'components/Txtfield'
import messages from './messages'
import Title from './Title'
import Wrapper from './Wrapper'
import Form from './Form'
import Button from './Button'
import CheckBoxField from './CheckBoxField'
import PasswordWrapper from './PasswordWrapper'
import validate from './validate'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showPassword: false
		}
		this.onShowHide = ::this.onShowHide
		this.handleLogin = ::this.handleLogin
	}

	onShowHide() {
		this.setState({
			showPassword: !this.state.showPassword
		})
	}

	handleLogin(values) {
		const { signInWithEmailAndPassword } = this.props
		signInWithEmailAndPassword(values.email, values.password)
	}

	render() {
		const { handleSubmit, submitting, intl } = this.props
		const { showPassword } = this.state
		return (
			<Wrapper>
				<Title>{intl.formatMessage(messages.into, { login: messages.login.defaultMessage })}</Title>
				<Form onSubmit={handleSubmit(this.handleLogin)}>
					<Field
						name='email'
						type='email'
						component={TxtField}
						label={intl.formatMessage(messages.email)}
						fullWidth
					/>
					<PasswordWrapper>
						<Field
							name='password'
							type={showPassword ? 'text' : 'password'}
							component={TxtField}
							label={intl.formatMessage(messages.password)}
							fullWidth
						/>
						<Field
							name='show'
							type='checkbox'
							component={CheckBoxField}
							onCheck={this.onShowHide}
							iconStyle={{ fill: 'rgba(0, 0, 0, 0.22)', marginRight: 0 }}
							checkedIcon={<Visibility />}
							uncheckedIcon={<VisibilityOff />}
						/>
					</PasswordWrapper>
					<Button
						type='submit'
						label={intl.formatMessage(messages.login)}
						disabled={submitting}
						buttonStyle={{ height: '50px', lineHeight: '50px' }}
						primary
						fullWidth
					/>
				</Form>
			</Wrapper>
		)
	}
}


Login.propTypes = {
	signInWithEmailAndPassword: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	submitting: PropTypes.bool.isRequired,
	intl: intlShape
}

const mapDispatchToProps = {
	signInWithEmailAndPassword: actions.signInWithEmailAndPassword
}

const renderLogin = reduxForm({
	form: 'LoginForm',
	validate
})(Login)

export default connect(null, mapDispatchToProps)(injectIntl(renderLogin))
