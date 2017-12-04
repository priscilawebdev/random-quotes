import glamorous from 'glamorous'
import RaisedButton from 'material-ui/RaisedButton'

const Wrapper = glamorous.div({
	cursor: 'default',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
}, ({ background }) => ({
	backgroundImage: Object.keys(background).length > 0 ? `url(${background.url})` : 'none'
}))

const Button = glamorous(RaisedButton)({
	marginTop: 20,
	'& div > div': {
		height: '50px !important'
	}
})

export {
	Wrapper,
	Button
}
