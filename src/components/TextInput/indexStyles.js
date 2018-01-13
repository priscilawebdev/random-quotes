import glamorous from 'glamorous'
import TextField from 'material-ui/TextField'

const Wrapper = glamorous(TextField)(({ type = 'text' }) => ({
	display: type === 'hidden' && 'none !important',
	background: '#FFFFFF'
}))

export default Wrapper
