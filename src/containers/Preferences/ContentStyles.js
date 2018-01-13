import React from 'react'
import glamorous from 'glamorous'
import { ListItem } from 'material-ui/List'
import { GridTile } from 'material-ui/GridList'
import { white, grey400 } from 'material-ui/styles/colors'

const LItem = glamorous(props => (
	<ListItem
		style={{ color: white, fontSize: 13 }}
		{...props}
	/>
))()

const PrimaryText = glamorous.div({
	'& span': {
		'&:nth-child(2)': {
			color: grey400,
			textTransform: 'capitalize',
			marginLeft: 5
		}
	}
})

const BGItem = glamorous(props => (
	<GridTile
		titleStyle={{ width: 100 }}
		subtitleStyle={{ width: 100 }}
		{...props}
	/>
))()

export {
	LItem,
	PrimaryText,
	BGItem
}
