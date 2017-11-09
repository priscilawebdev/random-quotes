import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import { connect } from 'react-redux'

import Heart from 'components/Heart'
import { actions } from 'ducks/app'
import messages from './messages'

const authorClassName = 'author'
const Author = glamorous.div(authorClassName, {
	position: 'absolute',
	right: 0,
	top: 0,
	left: 0,
	opacity: 0
})
Author.className = authorClassName

const descriptionClassName = 'quoteDescription'
const Description = glamorous.div(descriptionClassName, {
	fontSize: '1.7em',
	lineHeight: '30px',
	transition: 'all .35s ease'
})
Description.className = descriptionClassName

const Name = glamorous.span({
	fontFamily: 'Roboto',
	textTransform: 'capitalize'
})

const Wrapper = glamorous.div({
	position: 'relative',
	textAlign: 'center',
	display: 'flex',
	alignItems: 'center',
	minHeight: 57,
	transition: 'all .35s ease',
	cursor: 'auto',
	':hover': {
		[`& .${Author.className}`]: {
			opacity: 1,
			transform: 'translateY(22px)'
		},
		[`& .${Description.className}`]: {
			transform: 'translateY(-22px)'
		}
	}
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
				<Wrapper>
					<Description>
						<FormattedMessage {...messages.quote} values={{ quote: quote.description }} />
					</Description>
					<Author>
						<Name>{quote.author}</Name>
						<Heart full={quote.like} margin='0 0 0 7px' />
					</Author>
				</Wrapper>
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
