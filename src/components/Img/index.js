import glamorous from 'glamorous'

const Img = glamorous.div({
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
}, ({ url, borderRadius = 2, width = '100%', height = '100%' }) => ({
	width,
	height,
	borderRadius,
	backgroundImage: `url(${url})`
}))

export default Img
