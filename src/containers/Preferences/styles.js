import glamorous from 'glamorous'
import RaisedButton from 'material-ui/RaisedButton'
import { mediaQueries } from '../../style-utils'

const Settings = glamorous.div({
	position: 'absolute',
	maxWidth: 'none',
	height: 450,
	width: '100%',
	margin: 0,
	padding: 0,
	left: 3,
	right: 0,
	bottom: 'calc(50% + 20px)',
	zIndex: 999,
	borderRadius: 7,
	[mediaQueries.tablet]: {
		width: 700
	}
}, ({ display }) => ({
	display: display ? 'block' : 'none'
}))

const Panel = glamorous.div({
	opacity: '0.925',
	height: '100%',
	borderRadius: 3,
	':before': {
		content: `''`, // eslint-disable-line
		height: 0,
		width: 0,
		position: 'absolute',
		borderLeft: '7px solid transparent',
		borderRight: '7px solid transparent',
		bottom: -6,
		borderTop: '6px solid #0F0F0F',
		left: 15
	}
}, ({ authenticated }) => ({
	background: authenticated ? '#0F0F0F' : '#FFFFFF',
	':before': {
		borderTop: authenticated ? '6px solid #0F0F0F' : '6px solid #FFFFFF'
	}
}))

const Wrapper = glamorous.div(() => {
	const quoteHeight = document.getElementsByClassName('quoteWrapper')[0]
	return ({
		position: 'absolute',
		bottom: 20,
		left: 17,
		right: 17,
		paddingLeft: 16,
		height: quoteHeight ? quoteHeight.clientHeight : 'auto',
		display: 'flex',
		alignItems: 'center'
	})
})

const Img = glamorous.div({
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	borderRadius: 2,
	width: '100%',
	height: '100%'
}, ({ url }) => ({
	backgroundImage: `url(${url})`
}))

const Button = glamorous(RaisedButton)({
	marginTop: 20,
	'& div > div': {
		height: '50px !important'
	}
})

export {
	Wrapper,
	Settings,
	Panel,
	Img,
	Button
}
