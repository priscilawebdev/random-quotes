import React from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import { GridList, GridTile } from 'material-ui/GridList'

import messages from './messages'

const Header = ({ intl, handleShowQuotes }) => (
	<GridList
		cellHeight='auto'
		cols={2}
		padding={0}
		style={{
			margin: 0,
			borderRight: '1px solid #FFFFFF',
			borderLeft: '1px solid #FFFFFF',
			borderTopLeftRadius: 2,
			borderTopRightRadius: 2
		}}
	>
		<GridTile style={{ paddingRight: 1 }}>
			<RaisedButton
				label={intl.formatMessage(messages['randomQuotes.containers.preferences.photos'])}
				onClick={() => handleShowQuotes(false)}
				buttonStyle={{ borderRadius: 0 }}
				fullWidth
			/>
		</GridTile>
		<GridTile style={{ paddingLeft: 1 }}>
			<RaisedButton
				label={intl.formatMessage(messages['randomQuotes.containers.preferences.quotes'])}
				onClick={() => handleShowQuotes(true)}
				buttonStyle={{ borderRadius: 0 }}
				fullWidth
			/>
		</GridTile>
	</GridList>
)

Header.propTypes = {
	handleShowQuotes: PropTypes.func.isRequired,
	intl: intlShape
}

export default injectIntl(Header)
