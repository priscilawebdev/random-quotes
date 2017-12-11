import glamorous from 'glamorous'
import img from './img/loading.svg'

const Spinner = glamorous.div({
	textAlign: 'center',
	margin: '0 auto',
	width: 38,
	display: 'block',
	':after': {
		content: '',
		display: 'block',
		paddingBottom: '100%',
		background: `url(${img}) center center no-repeat`,
		size: 'cover',
		animationName: 'spin',
		animationDuration: '750ms',
		animationIterationCount: 'infinite',
		animationTimingFunction: 'linear',
	}
}, ({ centered = true }) => ({
	position: centered ? 'absolute' : 'relative',
	top: centered ? '50%' : 'auto',
	left: centered ? '50%' : 'auto'
}))

export default Spinner
