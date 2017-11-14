import React from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import Grid from 'components/Grid'
import GridCell from 'components/GridCell'
import RaisedButton from 'material-ui/RaisedButton'

import { Divider } from './styles'
import messages from './messages'

const Header = ({ intl, setShowQuotes }) => (
	<Grid>
		<GridCell grow={1} basis={100}>
			<RaisedButton
				label={intl.formatMessage(messages.photos)}
				onClick={() => setShowQuotes(false)}
				buttonStyle={{ borderRadius: 0 }}
				fullWidth
			/>
		</GridCell>
		<GridCell>
			<Divider vertical />
		</GridCell>
		<GridCell grow={1} basis={100}>
			<RaisedButton
				label={intl.formatMessage(messages.quotes)}
				onClick={() => setShowQuotes(true)}
				buttonStyle={{ borderRadius: 0 }}
				fullWidth
			/>
		</GridCell>
	</Grid>
)

Header.propTypes = {
	setShowQuotes: PropTypes.func.isRequired,
	intl: intlShape
}

export default injectIntl(Header)
