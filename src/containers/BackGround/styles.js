import glamorous from 'glamorous'

const Wrapper = glamorous.div({
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column'
}, props => ({
	backgroundImage: props.background ? `url(${props.background.url})` : 'none'
}))

export default Wrapper
