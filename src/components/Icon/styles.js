import glamorous from 'glamorous'

const Wrapper = glamorous.div({
	transition: 'all .3s ease-in-out',
	fontSize: 0
}, ({ cursor, sm, md, lg, customSize, rotate46, name }) => {
	const size = getSize(sm, md, lg, customSize)
	return ({
		transform: rotate46 ? 'rotate(46deg) scale(1.1)' : 'none',
		opacity: name === 'settings' && !rotate46 ? 0.5 : 1,
		cursor,
		...size,
		':hover': {
			opacity: 1
		}
	})
})

const Img = glamorous.div({
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}, ({ url, fitHeight }) => ({
	backgroundImage: `url(${url})`,
	width: fitHeight ? 'auto' : '100%',
	height: fitHeight ? '100%' : 'auto'
}))

const getSize = (sm, md, lg, customSize) => {
	let result = { width: '100%', height: '100%' }
	if (sm) { result = { width: 18, height: 18 } }
	if (md) { result = { width: 24, height: 24 } }
	if (lg) { result = { width: 32, height: 32 } }
	if (customSize) { result = { width: customSize, height: customSize } }
	return result
}

export {
	Wrapper,
	Img
}
