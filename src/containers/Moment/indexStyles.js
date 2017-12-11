import glamorous from 'glamorous'
import { mediaQueries } from '../../style-utils'

const Wrapper = glamorous.div({
	textAlign: 'center',
	marginTop: 'auto',
	marginBottom: 'auto',
	lineHeight: 1
})

const H1 = glamorous.h1({
	padding: 0,
	margin: 0,
	fontSize: '5em',
	fontWeight: 500,
	marginBottom: 20,
	[mediaQueries.tablet]: {
		fontSize: '7.5em'
	}
})

const H2 = glamorous.h2({
	padding: 0,
	margin: 0,
	fontSize: '3em',
	fontWeight: 500,
	textTransform: 'lowercase',
	cursor: 'text',
	':first-letter': {
		textTransform: 'uppercase'
	},
	[mediaQueries.tablet]: {
		fontSize: '4.5em'
	}
})

export {
	H1,
	H2,
	Wrapper
}
