import glamorous from 'glamorous'

const Wrapper = glamorous.div({
	fontSize: 0,
	display: 'table'
}, ({ size = '100%', cursor }) => ({
	width: size,
	height: size,
	cursor
}))

const Img = glamorous.div({
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}, ({ url, fitHeight }) => ({
	backgroundImage: `url(${url})`,
	width: fitHeight ? 'auto' : '100%',
	height: fitHeight ? '100%' : 'auto'
}))

const Centered = glamorous.span({
	display: 'table-cell',
	verticalAlign: 'middle',
	fontSize: 0,
	transition: 'transform .1s ease-in-out'
}, ({ sm, md, lg }) => {
	console.log(...getSize(sm, md, lg))
})

const getSize = (sm, md, lg) => {
	let result = { width: '100%', height: '100%' }
	if (sm) { result = { width: 18, height: 18 } }
	if (md) { result = { width: 24, height: 24 } }
	if (lg) { result = { width: 32, height: 32 } }
	console.log(result)
	return result
}

export {
	Wrapper,
	Centered,
	Img
}
