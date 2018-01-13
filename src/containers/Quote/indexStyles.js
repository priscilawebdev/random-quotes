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
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	lineHeight: '15px'
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

const Name = glamorous.span({
	fontSize: '1em',
	textTransform: 'capitalize',
	marginRight: 5,
	cursor: 'text'
})

const P = glamorous.p({
	position: 'relative',
	margin: 0,
	zIndex: 1,
	':hover': {
		[`& .${Author.className}`]: {
			opacity: 1,
			transform: 'translateY(10px)'
		},
		[`& .${Description.className}`]: {
			transform: 'translateY(-10px)'
		}
	}
})

export {
	Author,
	Description,
	Name,
	P
}
