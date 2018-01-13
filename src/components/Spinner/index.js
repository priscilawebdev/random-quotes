import glamorous from 'glamorous'
import img from './img/loading.svg'

const Spinner = glamorous.div({
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	'&:after': {
		content: `''`, // eslint-disable-line
		display: 'block',
		background: `url(${img}) center center no-repeat`,
		backgroundSize: 'contain',
		animationName: 'spin',
		animationDuration: '750ms',
		animationIterationCount: 'infinite',
		animationTimingFunction: 'linear',
		width: 38,
		height: 38
	}
})

export default Spinner
