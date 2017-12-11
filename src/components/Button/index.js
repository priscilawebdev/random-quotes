import React from 'react'
import glamorous from 'glamorous'
import RaisedButton from 'material-ui/RaisedButton'

const radiusMap = {
	topLeft: 'borderTopLeftRadius',
	topRight: 'borderTopRightRadius',
	bottomRight: 'borderBottomRightRadius',
	bottomLeft: 'borderBottomLeftRadius',
	all: 'borderRadius'
}

const Button = glamorous(({
	borderRadius,
	noRadius = false,
	radiusDir = 'all',
	radius = 2,
	sm = false,
	...props
}) => (
	<RaisedButton
		buttonStyle={{
			[radiusMap[radiusDir]]: radius,
			...!sm && ({
				height: 50,
				lineHeight: '50px',
			}),
			...noRadius && ({
				borderRadius: 0
			})
		}}
		style={{
			...!sm && ({
				marginTop: 20,
				height: 50
			})
		}}
		{...props}
	/>
))()

export default Button
