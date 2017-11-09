import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from 'ducks/app'

import Grid from 'components/Grid'
import GridCell from 'components/GridCell'
import Moment from './Moment'
import Wrapper from './Wrapper'
import Quote from './Quote'
import Preferences from './Preferences'

class HomePage extends Component {

	componentDidMount() {
		const { handleLoadData } = this.props
		handleLoadData()
	}

	render() {
		const { backgrounds, quotes } = this.props
		return (
			backgrounds && quotes && (
				<Wrapper backgrounds={backgrounds}>
					<Moment />
					<Grid align='bottom'>
						<GridCell alignSelf='middle'>
							<Preferences
								quotes={quotes}
								backgrounds={backgrounds}
							/>
						</GridCell>
						<GridCell justifySelf='center' alignSelf='middle'>
							<Quote quotes={quotes} />
						</GridCell>
					</Grid>
				</Wrapper>
			)
		)
	}
}


HomePage.propTypes = {
	backgrounds: PropTypes.array,
	quotes: PropTypes.array,
	handleLoadData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	...state.app.data
})

const mapDispatchToProps = {
	handleLoadData: actions.loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

