import glamorous from 'glamorous'
import RaisedButton from 'material-ui/RaisedButton'

const Button = glamorous(RaisedButton)({
	marginTop: 20,
	'& div > div': {
		height: '50px !important'
	}
})

export default Button
