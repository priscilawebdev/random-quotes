import React from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { UL, LI } from './MenuStyles'
import messages from './messages'

const Menu = ({ intl, onSetCategory }) => (
	<UL>
		<LI
			primaryText={intl.formatMessage(messages['randomQuotes.containers.preferences.general'])}
			onClick={() => onSetCategory('general')}
		/>
		<LI
			primaryText={intl.formatMessage(messages['randomQuotes.containers.preferences.photos'])}
			onClick={() => onSetCategory('photos')}
		/>
		<LI
			primaryText={intl.formatMessage(messages['randomQuotes.containers.preferences.quotes'])}
			onClick={() => onSetCategory('quotes')}
		/>
	</UL>
)

Menu.propTypes = {
	onSetCategory: PropTypes.func.isRequired,
	intl: intlShape
}

export default injectIntl(Menu)
