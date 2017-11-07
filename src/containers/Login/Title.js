import glamorous from 'glamorous'

import { mediaQueries } from '../../style-utils'

const Title = glamorous.div({
	fontSize: '1em',
	width: '100%',
	textAlign: 'center',
	color: '#2f273c',
	[mediaQueries.tablet]: {
		fontSize: '3.5em'
	}
})

export default Title
