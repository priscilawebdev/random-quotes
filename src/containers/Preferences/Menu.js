import React from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { UL, LI } from './MenuStyles'
import messages from './messages'

const Menu = ({ intl, onShowQuotes, onShowPhotos }) => (
	<UL>
		<LI
			primaryText={intl.formatMessage(messages['randomQuotes.containers.preferences.general'])}
			onClick={onShowPhotos}
		/>
		<LI
			primaryText={intl.formatMessage(messages['randomQuotes.containers.preferences.photos'])}
			onClick={onShowPhotos}
		/>
		<LI
			primaryText={intl.formatMessage(messages['randomQuotes.containers.preferences.quotes'])}
			onClick={onShowQuotes}
		/>
	</UL>
)

Menu.propTypes = {
	onShowQuotes: PropTypes.func.isRequired,
	onShowPhotos: PropTypes.func.isRequired,
	intl: intlShape
}

export default injectIntl(Menu)
