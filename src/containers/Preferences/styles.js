import glamorous from 'glamorous'
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
	zIndex: 1000000,
	borderRadius: 7,
	[mediaQueries.tablet]: {
		width: 700
	}
}, ({ opacity }) => ({
	opacity: opacity ? 1 : 0
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

const IconContainer = glamorous.span({
	transition: 'transform .1s ease-in-out',
	width: 20,
	height: 20,
	opacity: '0.5',
	cursor: 'pointer',
	':hover': {
		opacity: 1
	},
}, ({ rotate }) => ({
	transform: rotate ? 'rotate(46deg) scale(1.1)' : 'none'
}))

const Wrapper = glamorous.div(() => {
	const quoteHeight = document.getElementsByClassName('quoteWrapper')[0]
	return ({
		position: 'absolute',
		bottom: 0,
		left: 17,
		right: 17,
		paddingLeft: 16,
		height: quoteHeight ? quoteHeight.clientHeight : 'auto',
		display: 'flex',
		alignItems: 'center'
	})
})

const Img = glamorous.span({
	height: '70',
	width: '100',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}, ({ url }) => ({
	backgroundImage: `url(${url})`
}))

export {
	Wrapper,
	Settings,
	Panel,
	IconContainer,
	Img
}
