import glamorous from 'glamorous'

const Img = glamorous.img(({ fitHeight, opacity }) => ({
	opacity,
	height: fitHeight ? '100%' : 'auto',
	width: fitHeight ? 'auto' : '100%',
	':hover': {
		opacity: 1
	}
}))

export default Img
