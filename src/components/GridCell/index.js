import glamorous from 'glamorous'

const alignMap = {
	top: 'flex-start',
	middle: 'center',
	bottom: 'flex-end'
}

const justifyMap = {
	left: 'flex-start',
	center: 'center',
	right: 'flex-end'
}

const alignSelfMap = {
	top: {
		marginBottom: 'auto'
	},
	middle: {
		marginTop: 'auto',
		marginBottom: 'auto'
	},
	bottom: {
		marginTop: 'auto'
	}
}

const justifySelfMap = {
	left: {
		marginLeft: 'auto'
	},
	center: {
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	right: {
		marginRight: 'auto'
	}
}

const GridCell = glamorous.div(({
	align = 'left',
	justify = 'left',
	alignSelf,
	justifySelf,
	grow = 0,
	shrink = 1,
	basis
}) => ({
	alignItems: alignMap[align],
	justifyContent: justifyMap[justify],
	flex: `${grow} ${shrink} ${basis ? `${basis}%` : 'auto'}`,
	...alignSelfMap[alignSelf],
	...justifySelfMap[justifySelf]
}))

export default GridCell
