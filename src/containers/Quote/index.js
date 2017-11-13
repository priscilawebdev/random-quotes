import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions } from 'ducks/app'
import messages from './messages'
import { Author, Name, Description, Inner, Wrapper, P, Img } from './styles'

class Quote extends Component {
	componentDidMount() {
		this.getQuote()
	}

	componentWillReceiveProps(newProps) {
		if (this.props.hours !== newProps.hours) {
			this.getQuote(newProps.hours)
		}
	}

	getQuote(hours) {
		const { quotes, quote } = this.props
		if (!quote || hours === 24) { // new day => new quote
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
					<Inner>
						<P>
							<Description>
								<FormattedMessage
									{...messages.quote}
									values={{ quote: quote.description }}
								/>
							</Description>
							<Author>
								<Name>{quote.author.toLowerCase()}</Name>
								<Img full={quote.like} onClick={() => this.handleUpdateQuote({ ...quote, like: !quote.like })} />
							</Author>
						</P>
					</Inner>
				</Wrapper>
			)
		)
	}
}

Quote.propTypes = {
	handleUpdateQuote: PropTypes.func.isRequired,
	quotes: PropTypes.array.isRequired,
	hours: PropTypes.number.isRequired,
	quote: PropTypes.object
}

const mapStateToProps = state => ({
	quote: state.app.quote
})

const mapDispatchToProps = {
	handleUpdateQuote: actions.updateQuote
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote)
