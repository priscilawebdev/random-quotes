import glamorous from 'glamorous'
import { mediaQueries } from '../../style-utils'

const Wrapper = glamorous.div({
	position: 'absolute',
	left: 17,
	zIndex: 2,
	display: 'none',
	[mediaQueries.tablet]: {
		display: 'block'
	}
})

export default Wrapper
