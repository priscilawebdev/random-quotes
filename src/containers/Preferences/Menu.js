import React from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { UL, LI } from './MenuStyles'
import messages from './messages'

const Menu = ({ intl, onShow }) => (
	<UL>
		<LI
			primaryText={intl.formatMessage(messages['randomQuotes.containers.preferences.general'])}
			onClick={() => onShow('general')}
		/>
		<LI
			primaryText={intl.formatMessage(messages['randomQuotes.containers.preferences.photos'])}
			onClick={() => onShow('photos')}
		/>
		<LI
			primaryText={intl.formatMessage(messages['randomQuotes.containers.preferences.quotes'])}
			onClick={() => onShow('quotes')}
		/>
	</UL>
)

Menu.propTypes = {
	onShow: PropTypes.func.isRequired,
	intl: intlShape
}

export default injectIntl(Menu)
