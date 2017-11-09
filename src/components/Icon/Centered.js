import glamorous from 'glamorous'

const Centered = glamorous.span({
	display: 'table-cell',
	verticalAlign: 'middle',
	fontSize: 0
}, (props) => {
	let size
	switch (props) {
		case 'xxsm':
			size = { width: 9, height: 9 }
			break
		case 'xsm':
			size = { width: 12, height: 12 }
			break
		case 'sm':
			size = { width: 18, height: 18 }
			break
		case 'md':
			size = { width: 24, height: 24 }
			break
		case 'lg':
			size = { width: 32, height: 32 }
			break
		default:
			size = { width: '100%', height: '100%' }
	}
	return ({
		...size
	})
})

export default Centered
