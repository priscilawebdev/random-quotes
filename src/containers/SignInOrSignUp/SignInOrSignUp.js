import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { Wrapper, Info, Inner } from './styles'
import messages from './messages'

class SignInOrSignUp extends Component {
	constructor() {
		super()
		this.state = { signIn: true }
	}

	render() {
		const { signIn } = this.state
		return (
			<Wrapper>
				{signIn ? (
					<Inner>
						<SignIn />
						<Info>
							<FormattedMessage
								{...messages['randomQuotes.containers.signInOrSignUp.dontHaveAnAccount']}
								values={{ link: (
									<a onClick={() => this.setState({ signIn: false })} tabIndex={0} role='link'>
										<FormattedMessage {...messages['randomQuotes.containers.signInOrSignUp.signUp']} />
									</a>
								) }}
							/>
						</Info>
					</Inner>
				) : (
					<Inner>
						<SignUp />
						<Info>
							<FormattedMessage
								{...messages['randomQuotes.containers.signInOrSignUp.alreadyHaveAnAccount']}
								values={{ link: (
									<a onClick={() => this.setState({ signIn: true })} tabIndex={0} role='link'>
										<FormattedMessage {...messages['randomQuotes.containers.signInOrSignUp.signIn']} />
									</a>
								) }}
							/>
						</Info>
					</Inner>
				)}
			</Wrapper>
		)
	}
}

export default SignInOrSignUp
