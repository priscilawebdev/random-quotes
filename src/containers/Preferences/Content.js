import React from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import Grid from 'components/Grid'
import GridCell from 'components/GridCell'
import Icon from 'components/Icon'

import { Actions, Img } from './styles'
import messages from './messages'

const Content = ({ intl, showQuotes, quotes, backgrounds }) => (
	<Grid columns>
		<GridCell justifySelf='left' padding='10px 11px 0 11px'>
			<RaisedButton
				label={intl.formatMessage(showQuotes ? messages.quotes : messages.photos)}
				icon={<ContentAdd />}
				onClick={() => console.log('oioioi')}
			/>
		</GridCell>
		<GridCell grow={1}>
			<Grid multiline>
				{
					showQuotes ? (
						quotes.map(quote => (
							<GridCell key={quote.key} basis={100}>{quote.description}</GridCell>
						))
					) : (
						backgrounds.map(background => (
							<GridCell
								key={background.key}
								height={100}
								width='23%'
								padding='10px 0 0 11px'
								position='relative'
								cursor='pointer'
							>
								<Img url={background.url} onClick={() => console.log('popopo')} />
								<Actions>
									<Icon name='garbage' size={20} cursor='pointer' />
								</Actions>
							</GridCell>
						))
					)
				}
			</Grid>
		</GridCell>
	</Grid>
)

Content.propTypes = {
	showQuotes: PropTypes.bool.isRequired,
	backgrounds: PropTypes.array.isRequired,
	quotes: PropTypes.array.isRequired,
	intl: intlShape
}

export default injectIntl(Content)
