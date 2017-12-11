import React from 'react'
import glamorous from 'glamorous'
import Checkbox from 'material-ui/Checkbox'

const PasswordWrapper = glamorous.div({
	position: 'relative'
})

const Wrapper = glamorous.div({
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignContent: 'center',
	background: '#FFFFFF'
})

const CheckBoxField = glamorous(props => (
	<Checkbox {...props} />
))({
	position: 'absolute !important',
	top: 30,
	right: 0,
	width: 'auto !important'
})

export {
	PasswordWrapper,
	Wrapper,
	CheckBoxField
}
