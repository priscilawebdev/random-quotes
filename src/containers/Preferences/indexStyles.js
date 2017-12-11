import glamorous from 'glamorous'

const Wrapper = glamorous.div(() => {
	const quoteHeight = document.getElementsByClassName('quoteWrapper')[0]
	return ({
		position: 'absolute',
		bottom: 20,
		left: 17,
		right: 17,
		paddingLeft: 16,
		height: quoteHeight ? quoteHeight.clientHeight : 'auto',
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer'
	})
})
export default Wrapper
