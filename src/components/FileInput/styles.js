import glamorous from 'glamorous'
import RaisedButton from 'material-ui/RaisedButton'
import { icons } from 'components/Icon'

const Error = glamorous.div({
	fontSize: 12,
	color: '#F44336'
})

const HR = glamorous.hr({
	border: 'none',
	borderBottom: '2px solid transparent',
	borderBottomColor: '#F44336',
	boxSizing: 'content-box',
	margin: 0,
	marginBottom: 4,
	width: '100%',
	transform: 'scaleX(1)',
	transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
})

const Input = glamorous.input({
	cursor: 'pointer',
	position: 'absolute',
	top: 0,
	bottom: 0,
	right: 0,
	left: 0,
	width: '100%',
	opacity: 0
})

const Button = glamorous(RaisedButton)({
	verticalAlign: 'middle'
})


export {
	Input,
	Error,
	Button,
	HR
}
