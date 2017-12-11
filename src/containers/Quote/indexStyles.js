import glamorous from 'glamorous'
import { mediaQueries } from '../../style-utils'

const authorClassName = 'author'
const Author = glamorous.span(authorClassName, {
	position: 'absolute',
	right: 0,
	bottom: 0,
	left: 0,
	opacity: 0,
	transition: 'all .35s ease',
	cursor: 'pointer'
})
Author.className = authorClassName

const descriptionClassName = 'quoteDescription'
const Description = glamorous.span(descriptionClassName, {
	fontFamily: 'Caveat',
	display: 'block',
	fontSize: '1.5em',
	transition: 'all .35s ease',
	[mediaQueries.tablet]: {
		fontSize: '1.7em'
	}
})
Description.className = descriptionClassName

const wrapperClassName = 'quoteWrapper'
const Wrapper = glamorous.div(wrapperClassName, {
	position: 'absolute',
	bottom: 20,
	width: '50%',
	transform: 'translateX(50%)',
	left: 0
})
Wrapper.className = wrapperClassName

const Name = glamorous.span({
	fontSize: '1em',
	textTransform: 'capitalize',
	marginRight: 5,
	cursor: 'text'
})

const Inner = glamorous.div({
	position: 'relative',
	textAlign: 'center',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	minHeight: 57,
	paddingBottom: 10,
	cursor: 'auto',
	':hover': {
		[`& .${Author.className}`]: {
			opacity: 1,
			transform: 'translateY(15px)'
		},
		[`& .${Description.className}`]: {
			transform: 'translateY(-15px)'
		}
	}
})

const P = glamorous.p({
	position: 'relative',
	margin: 0
})

export {
	Author,
	Description,
	Name,
	Inner,
	Wrapper,
	P
}
