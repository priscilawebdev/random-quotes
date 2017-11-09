import glamorous from 'glamorous'

const justifyMap = {
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
	spaceAround: 'space-around',
	spaceBetween: 'space-between'
}

const alignMap = {
	top: 'flex-start',
	middle: 'center',
	bottom: 'flex-end',
}

const Grid = glamorous.div(({
	align = 'left',
	justify = 'top',
	columns = false,
	inline = false,
	multiline = false,
	padding = 0,
	margin = 0
}) => ({
	display: inline ? 'inline-flex' : 'flex',
	alignItems: alignMap[align],
	justifyContent: justifyMap[justify],
	flexDirection: columns ? 'column' : 'row',
	flexWrap: multiline ? 'wrap' : 'nowrap',
	padding,
	margin
}))

export default Grid
