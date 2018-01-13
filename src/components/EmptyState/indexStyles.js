import glamorous from 'glamorous'

const Wrapper = glamorous.div({
	marginTop: 100,
	marginBottom: 100,
	textAlign: 'center'
})

const Heading = glamorous.h2({
	margin: '0 0 30px'
})

const SubHeading = glamorous.p({
	margin: '-30px 0 15px'
})

export {
	Heading,
	SubHeading,
	Wrapper
}
