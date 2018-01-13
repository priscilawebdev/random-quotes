import React from 'react'
import glamorous from 'glamorous'
import Checkbox from 'material-ui/Checkbox'

const PasswordWrapper = glamorous.div({
	position: 'relative'
})

const CheckBoxField = glamorous(props => (
	<Checkbox
		iconStyle={{
			fill: 'rgba(0, 0, 0, 0.22)',
			left: 0,
			marginRight: 0
		}}
		{...props}
	/>
))({
	position: 'absolute !important',
	right: 0,
	top: 34,
	marginRight: 0,
	width: 'auto !important'
})

export {
	PasswordWrapper,
	CheckBoxField
}
