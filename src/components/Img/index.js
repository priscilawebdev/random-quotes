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

const Img = glamorous.div({
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
}, ({ url, borderRadius = 2, width = '100%', height = '100%' }) => ({
	width,
	height,
	borderRadius,
	backgroundImage: `url(${url})`
}))

export default Img
