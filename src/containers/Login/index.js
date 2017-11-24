import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'
import { actions } from 'reducers/auth'
import TxtField from 'components/Txtfield'
import messages from './messages'
import validate from './validate'
import { Form, PasswordWrapper, Title, Wrapper, CheckBoxField, Button } from './styles'

class Login extends Component {
	state = { showPassword: false }

	handleShowHide = () => this.setState({ showPassword: !this.state.showPassword })

	handleLogin = values => this.props.doLogin(values)

	render() {
		const { handleSubmit, submitting, intl } = this.props
		const { showPassword } = this.state
		return (
			<Wrapper>
				<Title>{intl.formatMessage(messages['randomQuotes.containers.login'])}</Title>
				<Form onSubmit={handleSubmit(this.handleLogin)}>
					<Field
						name='email'
						type='email'
						component={TxtField}
						label={intl.formatMessage(messages['randomQuotes.containers.login.email'])}
						fullWidth
					/>
					<PasswordWrapper>
						<Field
							name='password'
							type={showPassword ? 'text' : 'password'}
							component={TxtField}
							label={intl.formatMessage(messages['randomQuotes.containers.login.password'])}
							fullWidth
						/>
						<Field
							name='show'
							type='checkbox'
							component={CheckBoxField}
							onCheck={this.handleShowHide}
							iconStyle={{ fill: 'rgba(0, 0, 0, 0.22)', marginRight: 0 }}
							checkedIcon={<Visibility />}
							uncheckedIcon={<VisibilityOff />}
						/>
					</PasswordWrapper>
					<Button
						type='submit'
						label={intl.formatMessage(messages['randomQuotes.containers.login'])}
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
	doLogin: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	submitting: PropTypes.bool.isRequired,
	intl: intlShape
}

const mapDispatchToProps = {
	doLogin: actions.login
}

const renderLogin = reduxForm({
	form: 'Login',
	validate
})(Login)

export default connect(null, mapDispatchToProps)(injectIntl(renderLogin))
