import glamorous from 'glamorous'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'

const Form = glamorous.form({
	width: '403px',
	margin: '0 auto'
})

const PasswordWrapper = glamorous.div({
	position: 'relative'
})

const Title = glamorous.div({
	fontSize: '3.5em',
	width: '100%',
	textAlign: 'center',
	color: '#2f273c'
})

const Wrapper = glamorous.div({
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignContent: 'center',
	background: '#FFFFFF'
})

const CheckBoxField = glamorous(Checkbox)({
	position: 'absolute !important',
	top: 30,
	right: 0,
	width: 'auto !important'
})

const Button = glamorous(RaisedButton)({
	marginTop: 20,
	'& div > div': {
		height: '50px !important'
	}
})

export {
	Form,
	PasswordWrapper,
	Title,
	Wrapper,
	CheckBoxField,
	Button
}
