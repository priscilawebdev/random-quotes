import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

export class LanguageProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
	render() {
		const { locale, children } = this.props
		return (
			<IntlProvider locale={locale} key={locale} >
				{React.Children.only(children)}
			</IntlProvider>
		)
	}
}

LanguageProvider.propTypes = {
	locale: PropTypes.string,
	children: PropTypes.element.isRequired
}

const mapStateToProps = state => ({
	...state.language
})

export default connect(mapStateToProps)(LanguageProvider)
