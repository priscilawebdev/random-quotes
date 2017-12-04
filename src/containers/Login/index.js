import Loadable from 'react-loadable'
import Spinner from 'components/Spinner'

export default Loadable({
	loader: () => import('./Login'),
	loading: Spinner
})
