import Loadable from 'react-loadable'
import Spinner from 'components/Spinner'

export default Loadable({
	loader: () => import('./SignInOrSignUp'),
	loading: Spinner
})
