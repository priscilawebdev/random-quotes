import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from 'components/Spinner'
import Moment from 'containers/Moment'
import Background from 'containers/Background'
import Quote from 'containers/Quote'
import Preferences from 'containers/Preferences'
import { actions } from 'reducers/messages'
import { Footer, Notification } from './indexStyles'

const HomePage = ({ backgrounds, quotes, date, show, message, type, handleDismissNotification }) => (
	backgrounds.length > 0 && quotes.length > 0 ? (
		<Background backgrounds={backgrounds} date={date}>
			<Moment date={date} />
			<Footer>
				<Preferences backgrounds={backgrounds} quotes={quotes} />
				<Quote quotes={quotes} date={date} />
			</Footer>
			<Notification
				open={show}
				type={type}
				message={message}
				onRequestClose={() => handleDismissNotification()}
				autoHideDuration={3000}
			/>
		</Background>
	) : (<Spinner />)
)

const mapStateToProps = state => ({
	quotes: state.quotes.list,
	backgrounds: state.backgrounds.list,
	date: state.app.date,
	...state.messages
})

const mapDispatchToProps = {
	handleDismissNotification: actions.destroyNotification
}

HomePage.propTypes = {
	backgrounds: PropTypes.array.isRequired,
	quotes: PropTypes.array.isRequired,
	date: PropTypes.string.isRequired,
	show: PropTypes.bool.isRequired,
	handleDismissNotification: PropTypes.func.isRequired,
	type: PropTypes.string,
	message: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
