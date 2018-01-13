import React from 'react'
import glamorous from 'glamorous'
import Snackbar from 'material-ui/Snackbar'
import { red900, lightGreen500, yellow500 } from 'material-ui/styles/colors'

const Footer = glamorous.div({
	paddingBottom: 20,
	minHeight: 57,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center'
})

const Notification = glamorous(({ message, type, ...props }) => (
	<Snackbar
		message={
			<div>
				<NotificationType type={type}>
					{`${type}: `}
				</NotificationType>
				{message}
			</div>
		}
		{...props}
	/>
))({
	textAlign: 'center'
})

const NotificationType = glamorous.span(({ type }) => ({
	color: getNotificationType(type),
	textTransform: 'capitalize'
}))

const getNotificationType = (notType) => {
	switch (notType) {
		case 'info':
			return yellow500
		case 'success':
			return lightGreen500
		default:
			return red900
	}
}

export {
	Footer,
	Notification
}
