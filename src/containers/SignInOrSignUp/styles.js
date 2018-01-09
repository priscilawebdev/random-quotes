import glamorous from 'glamorous'

const Form = glamorous.form({
	width: '403px',
	margin: '0 auto'
})

const Title = glamorous.div({
	fontFamily: 'Caveat',
	fontSize: '3.5em',
	width: '100%',
	textAlign: 'center',
	color: '#2f273c'
})

const Wrapper = glamorous.div({
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignContent: 'center'
})

export {
	Form,
	Title,
	Wrapper
}
