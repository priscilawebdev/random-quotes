import React from 'react'
import glamorous from 'glamorous'
import { GridList } from 'material-ui/GridList'
import { white } from 'material-ui/styles/colors'

const Wrapper = glamorous.div({
	transition: 'all .15s ease',
	transform: 'translateY(-18px)',
	position: 'absolute',
	bottom: 13,
	left: -13
})

const Panel = glamorous.div({
	textAlign: 'left',
	height: 450,
	width: 700,
	maxWidth: 'none',
	margin: 2,
	padding: 0,
	overflowY: 'auto',
	'&:before': {
		content: `''`, // eslint-disable-line
		height: 0,
		width: 0,
		position: 'absolute',
		borderLeft: '7px solid transparent',
		borderRight: '7px solid transparent',
		bottom: -6,
		left: 15
	},
	'&:after': {
		content: `''`, // eslint-disable-line
		height: '100%',
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		zIndex: -1,
		borderRadius: 3
	}
}, ({ authenticated }) => ({
	'&:after': {
		backgroundColor: authenticated ? '#0f0f0f' : white,
	},
	'&:before': {
		borderTop: `6px solid ${authenticated ? '#0f0f0f' : white}`
	},
	'&:after, &:before': {
		opacity: authenticated ? 0.92 : 1
	}
}))

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

export {
	Wrapper,
	Panel,
	Grid
}
