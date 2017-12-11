import glamorous from 'glamorous'
import { GridTile } from 'material-ui/GridList'

const GridItem = glamorous(GridTile)({
	display: 'flex !important',
	alignItems: 'center',
	justifyContent: 'center'
})

const Title = glamorous.div({
	fontFamily: 'Caveat',
	fontSize: '2.5em',
	padding: 0
})

export {
	GridItem,
	Title
}
