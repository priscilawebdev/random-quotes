import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import { connect } from 'react-redux'

import Heart from 'components/Heart'
import { actions } from 'ducks/app'
import messages from './messages'

const authorClassName = 'author'
const Author = glamorous.span(authorClassName, {
	width: '100%',
	fontFamily: 'Roboto',
	textAlign: 'center',
	fontSize: '0.5em',
	position: 'absolute',
	right: 0,
	left: 0,
	opacity: 0,
	bottom: '-20px',
	transition: 'all .35s ease'
})
Author.className = authorClassName

const Div = glamorous.div({
	position: 'relative',
	textAlign: 'center',
	fontSize: '1.7em',
	transition: 'all .35s ease',
	bottom: '40px',
	padding: 15,
	':hover': {
		[`& .${Author.className}`]: {
			opacity: 1
		}
	}
})

const Name = glamorous.span({
	marginRight: '10px',
	textTransform: 'capitalize'
})

class Quote extends Component {

	componentDidMount() {
		this.getQuote()
	}

	getQuote() {
		const { quotes, quote } = this.props
		if (!quote) {
			const sortQuotes = quotes.sort((a, b) => a.vcount - b.vcount) // Sort quotes according to vcount (number of visualizations)
			const slicedQuotes = sortQuotes.slice(0, 5) // get the first 5 quotes
			const chosenQuote = slicedQuotes[Math.floor(Math.random() * slicedQuotes.length)] // return the randomly chosen quote
			this.handleUpdateQuote({ ...chosenQuote, vcount: chosenQuote.vcount + 1 })
		}
	}

	handleUpdateQuote(changes) {
		const { handleUpdateQuote } = this.props
		handleUpdateQuote(changes)
	}

	render() {
		const { quote } = this.props
		return (
			quote && (
				<Div>
					<FormattedMessage {...messages.quote} values={{ quote: quote.description }} />
					<Author>
						<Name>{quote.author.toString().toLowerCase()}</Name>
						<Heart full={quote.like} onClick={() => this.handleUpdateQuote({ ...quote, like: !quote.like })} />
					</Author>
				</Div>
			)
		)
	}
}

Quote.propTypes = {
	handleUpdateQuote: PropTypes.func.isRequired,
	quotes: PropTypes.array.isRequired,
	quote: PropTypes.object
}

const mapStateToProps = state => ({
	quote: state.app.quote
})

const mapDispatchToProps = {
	handleUpdateQuote: actions.updateQuote
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote)
