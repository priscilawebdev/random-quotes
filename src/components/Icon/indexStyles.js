import glamorous from 'glamorous'

const Wrapper = glamorous.span({
	display: 'inline-block',
	verticalAlign: 'middle',
	transition: 'transform .15s linear',
	':hover': {
		opacity: 1
	}
}, ({ cursor, sm, md, lg, customSize, rotate45, name }) => ({
	cursor,
	transform: rotate45 ? 'rotate(45deg) scale(1.1)' : 'none',
	opacity: name === 'settings' && !rotate45 ? 0.5 : 1,
	...getSize(sm, md, lg, customSize)
}))


const getSize = (sm, md, lg, customSize) => {
	let result = { width: '100%', height: '100%' }
	if (sm) { result = { width: 18, height: 18 } }
	if (md) { result = { width: 24, height: 24 } }
	if (lg) { result = { width: 32, height: 32 } }
	if (customSize) { result = { width: customSize, height: customSize } }
	return result
}

export default Wrapper
