import React from 'react'
import glamorous from 'glamorous'
import { GridList } from 'material-ui/GridList'

const Grid = glamorous(({
	overflowY = 'hidden',
	padding = 0,
	noMargin = false,
	multiline = true,
	cols = 2,
	children,
	...props
}) => (
	<GridList
		cols={cols}
		style={{
			overflowY,
			padding,
			margin: noMargin && 0,
			flexDirection: cols === 1 ? 'column' : 'row',
			flexWrap: multiline ? 'wrap' : 'nowrap'
		}}
		{...props}
	>
		{children}
	</GridList>
))({ height: '100%' })

export default Grid
