import glamorous from 'glamorous'
import { List, ListItem } from 'material-ui/List'
import { white } from 'material-ui/styles/colors'

const UL = glamorous(List)({
	paddingTop: '56px !important',
	textAlign: 'center',
	borderRight: '1px solid #d9d9d9',
	height: '100%'
})

const LI = glamorous(ListItem)({
	color: `${white}!important`,
	':hover': {
		opacity: 0.8
	}
})

export {
	UL,
	LI
}
