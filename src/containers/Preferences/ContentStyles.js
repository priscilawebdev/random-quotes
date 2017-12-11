import glamorous from 'glamorous'
import { GridTile, GridList } from 'material-ui/GridList'

const AddButton = glamorous(GridTile)({
	display: 'flex !important',
	height: 'auto !important',
	flexDirection: 'column',
	alignItems: 'flex-end'
})

const Wrapper = glamorous(GridList)({
	height: '100%',
	overflowY: 'auto',
	padding: 15
})

const ContentTitle = glamorous.div({
	fontFamily: 'Caveat',
	fontSize: '2.5em',
	padding: 0
})

export {
	Wrapper,
	AddButton,
	ContentTitle
}
