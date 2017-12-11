import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from 'reducers/quotes'
import Icon from 'components/Icon'
import messages from './messages'
import { Author, Name, Description, Inner, Wrapper, P } from './indexStyles'

class Quote extends Component {

	static propTypes = {
		handleUpdate: PropTypes.func.isRequired,
		quotes: PropTypes.array.isRequired,
		quote: PropTypes.object
	}

	constructor() {
		super()
		this.handleUpdateQuote = :: this.handleUpdateQuote
	}

	componentDidMount() {
		this.getQuote()
	}

	getQuote() {
		const { quotes, quote } = this.props
		if (Object.keys(quote).length === 0) {
			const sortQuotes = quotes.sort((a, b) => a.vcount - b.vcount) // Sort quotes according to vcount (number of visualizations)
			const slicedQuotes = sortQuotes.slice(0, 5) // get the first 5 quotes
			const chosenQuote = slicedQuotes[Math.floor(Math.random() * slicedQuotes.length)] // return the randomly chosen quote
			this.handleUpdateQuote({ ...chosenQuote, vcount: chosenQuote.vcount + 1 })
		}
	}

	handleUpdateQuote() {
		const { handleUpdate, quote } = this.props
		handleUpdate({ ...quote, like: !quote.like })
	}

	render() {
		const { quote } = this.props
		return (
			Object.keys(quote).length > 0 && (
				<Wrapper>
					<Inner>
						<P>
							<Description>
								<FormattedMessage
									{...messages['randomQuotes.containers.quote']}
									values={{ quote: quote.description }}
								/>
							</Description>
							<Author>
								<Name>{quote.author.toLowerCase()}</Name>
								<Icon
									name={quote.like ? 'heart' : 'heart-empty'}
									customSize={15}
									onClick={this.handleUpdateQuote}
								/>
							</Author>
						</P>
					</Inner>
				</Wrapper>
			)
		)
	}
}

const mapStateToProps = state => ({
	quote: state.quotes.quote
})

const mapDispatchToProps = {
	handleUpdate: actions.updateQuote
}

export default connect(mapStateToProps, mapDispatchToProps)(Quote)
