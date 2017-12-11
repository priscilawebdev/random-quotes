import glamorous from 'glamorous'
import { mediaQueries } from '../../style-utils'

const Wrapper = glamorous.div({
	position: 'absolute',
	display: 'block',
	maxWidth: 'none',
	height: 450,
	width: '100%',
	margin: 0,
	padding: 0,
	left: 6,
	right: 0,
	bottom: 'calc(50% + 22px)',
	zIndex: 999,
	borderRadius: 7,
	[mediaQueries.tablet]: {
		width: 700
	}
})

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

export {
	Wrapper,
	Panel
}
