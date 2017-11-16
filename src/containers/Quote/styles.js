import glamorous from 'glamorous'
import { mediaQueries } from '../../style-utils'
import imgHeart from './img/icon-heart.svg'
import imgHeartEmpty from './img/icon-heart-empty.svg'

const authorClassName = 'author'
const Author = glamorous.span(authorClassName, {
	position: 'absolute',
	right: 0,
	bottom: 0,
	left: 0,
	opacity: 0,
	transition: 'all .35s ease'
})
Author.className = authorClassName

const descriptionClassName = 'quoteDescription'
const Description = glamorous.span(descriptionClassName, {
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
	fontFamily: 'Roboto',
	textTransform: 'capitalize',
	marginRight: 5
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

const Img = glamorous.span({
	height: '15',
	width: '14',
	position: 'absolute',
	cursor: 'pointer',
	top: 4,
}, ({ full = false }) => ({
	backgroundImage: `url(${full ? imgHeart : imgHeartEmpty})`
}))

export {
	Author,
	Description,
	Name,
	Inner,
	Wrapper,
	P,
	Img
}
