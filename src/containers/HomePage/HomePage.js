import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from 'components/Spinner'
import Moment from 'containers/Moment'
import Background from 'containers/Background'
import Quote from 'containers/Quote'
import Preferences from 'containers/Preferences'

const HomePage = ({ backgrounds, quotes }) => (
	backgrounds.length > 0 && quotes.length > 0 ? (
		<Background backgrounds={backgrounds}>
			<Moment />
			<Preferences backgrounds={backgrounds} quotes={quotes} />
			<Quote quotes={quotes} />
		</Background>
	) : (<Spinner />)
)

const mapStateToProps = state => ({
	quotes: state.quotes.list,
	backgrounds: state.backgrounds.list
})

HomePage.propTypes = {
	backgrounds: PropTypes.array.isRequired,
	quotes: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(HomePage)
