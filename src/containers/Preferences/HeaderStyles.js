import React from 'react'
import glamorous from 'glamorous'
import { GridList, GridTile } from 'material-ui/GridList'
import { white } from 'material-ui/styles/colors'

const justifyMap = { left: 'flex-start', center: 'center', right: 'flex-end' }

const alignMap = { top: 'flex-start', middle: 'center', bottom: 'flex-end' }

const Account = glamorous(GridList)({
	height: 56,
	marginBottom: 35,
	padding: 8,
	'&:after': {
		content: `''`, // eslint-disable-line
		width: '100%',
		height: '100%',
		backgroundColor: `${white}`,
		borderRadius: 2,
		opacity: 0.2,
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: -1
	}
})

const GridItem = glamorous(({
	justify = 'left',
	align = 'top',
	inline = false,
	...props
}) => (
	<GridTile
		style={{
			display: inline ? 'inline-flex' : 'flex',
			justifyContent: justifyMap[justify],
			alignItems: alignMap[align],
		}}
		{...props}
	/>
))()

const Title = glamorous.div({
	fontFamily: 'Caveat',
	fontSize: '2.5em',
	padding: 0
})

const User = glamorous.div({
	float: 'left',
	display: 'flex',
	alignContent: 'center'
})

const Action = glamorous.div({
	color: `${white}`,
	':hover': {
		opacity: 0.8
	}
})

const Info = glamorous.div({
	color: `${white}`,
	marginLeft: 8,
	'& p': {
		margin: 0,
		lineHeight: 1,
		fontSize: '1.4em',
		'&:nth-child(2)': {
			fontSize: '0.8em',
			opacity: 0.5
		}
	}
})

export {
	GridItem,
	Title,
	User,
	Account,
	Info,
	Action
}
