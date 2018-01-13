import glamorous from 'glamorous'
import { cyan500 } from 'material-ui/styles/colors'

const Form = glamorous.form({
	width: '403px',
	margin: '0 auto'
})

const Title = glamorous.div({
	fontFamily: 'Caveat',
	fontSize: '3.5em'
})

const Wrapper = glamorous.div({
	textAlign: 'center',
	color: '#2f273c',
	display: 'table',
	height: '100%',
	width: '100%',
	paddingBottom: 20
})

const Inner = glamorous.div({
	display: 'table-cell',
	verticalAlign: 'middle'
})

const Info = glamorous.div({
	textAlign: 'center',
	color: '#2f273c',
	marginTop: 20,
	'& a': {
		cursor: 'pointer',
		color: cyan500,
		'&:hover': {
			opacity: 0.4
		}
	}
})

export {
	Form,
	Title,
	Wrapper,
	Info,
	Inner
}
