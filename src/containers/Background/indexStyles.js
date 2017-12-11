import glamorous from 'glamorous'

const Wrapper = glamorous.div({
	cursor: 'default',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
}, ({ background }) => ({
	backgroundImage: Object.keys(background).length > 0 ? `url(${background.url})` : 'none'
}))

export default Wrapper
