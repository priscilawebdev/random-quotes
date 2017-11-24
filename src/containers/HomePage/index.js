import React from 'react'
import { connect } from 'react-redux'
import Moment from 'containers/Moment'
import Background from 'containers/Background'
import Quote from 'containers/Quote'
import Preferences from 'containers/Preferences'

const HomePage = ({ backgrounds, quotes }) => (
	backgrounds.length > 0 && quotes.length > 0 && (
		<Background {...{ backgrounds }}>
			<Moment />
			<Preferences {...{ backgrounds, quotes }} />
			<Quote {...{ quotes }} />
		</Background>
	)
)

const mapStateToProps = state => ({
	backgrounds: state.backgrounds.list,
	quotes: state.quotes.list
})

export default connect(mapStateToProps)(HomePage)
